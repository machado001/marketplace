import { useState } from 'react'
import { CaretRight, CaretUp } from 'phosphor-react'
import { storage, db } from '../../services/fireBaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { v4 } from 'uuid'

export default function AddProduct() {
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()

  const [productName, setProductName] = useState('')
  const [productDesc, setProductDesc] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productStock, setProductStock] = useState(0)
  const [productImage, setProductImage] = useState('')

  const productsRef = collection(db, 'products')

  async function HandleAddProduct() {
    const newDoc = await addDoc(productsRef, {
      productName: productName,
      productDesc: productDesc,
      productCategory: productCategory,
      productPrice: productPrice,
      productStock: productStock,
      productImage: productImage,
    })
  }

  function UploadImage() {
    if (!image) return

    const imgRef = ref(storage, `images/${image.name + v4()}`)

    uploadBytes(imgRef, image).then(() => {
      getDownloadURL(imgRef).then((url) => {
        setProductImage(url)
      })
    })
  }
  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      <form className="shadow-lg md:w-4/5 sm:w-5/6 lg:w-2/4 p-8">
        <h1 className="text-3xl mb-6 text-indigo-900">Adicionar Produto</h1>
        <div className="md:flex gap-12 mb-4">
          <div className="h-5/6">
            <div className="flex flex-col mb-4">
              <label htmlFor="productName">Título do produto</label>
              <input
                className="outline-0 border-2 rounded px-3 py-2 w-full"
                type="text"
                id="productName"
                placeholder="Ex: Notebook Lenovo"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="productDesc">Descrição</label>
              <textarea
                className="outline-0 border-2 rounded px-3 py-2 w-full resize-none"
                id="productDesc"
                cols="30"
                rows="5"
                placeholder="Ex: usado durante 6 meses, bem reservado..."
                onChange={(e) => setProductDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div>
            <span className="block text-center">Foto do produto</span>
            <div className="flex flex-col items-center">
              <img
                className="h-44 p-4 shadow mt-4 mb-1"
                id="imgOutput"
                src={preview}
              />
              <div className="flex items-center">
                <label
                  htmlFor="upload"
                  className="px-2 py-1 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3 cursor-pointer"
                >
                  <p className="text-indigo-50 ">Escolher foto</p>
                  <input
                    id="upload"
                    className="hidden"
                    type="file"
                    onChange={(e) => {
                      setImage(
                        e.target.files[0],
                        setPreview(URL.createObjectURL(e.target.files[0]))
                      )
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="px-2 py-1 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3"
                  onClick={UploadImage}
                >
                  <div className="flex items-center">
                    <p className="text-indigo-50 pr-2">Upload</p>
                    <CaretUp className="text-white" weight="bold" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-4 mt-2">
          <div className="flex flex-col">
            <label htmlFor="tags">Categoria do produto</label>
            <select
              className="border-2 p-1 outline-none md:w-2/4"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option></option>
              <option>Eletrônicos</option>
              <option>disgrasa</option>
            </select>
          </div>
        </div>
        <div className="md:flex lg:justify-between">
          <div className="flex flex-col">
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              placeholder="R$"
              className="outline-none border-2 p-1"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="estoque">Estoque</label>
            <input
              type="number"
              placeholder="Ex: 243"
              className="outline-none border-2 p-1"
              onChange={(e) => setProductStock(e.target.value)}
            />
          </div>
        </div>
        <button
          className="px-4 py-2 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3 mt-3"
          type="button"
          onClick={HandleAddProduct}
        >
          <div className="flex items-center">
            <p className="pr-2 text-indigo-50 font-bold">Adicionar</p>
            <CaretRight className="text-white" />
          </div>
        </button>
      </form>
    </div>
  )
}
