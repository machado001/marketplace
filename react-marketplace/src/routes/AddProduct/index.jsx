import { useState, useEffect } from 'react'
import { CaretRight } from 'phosphor-react'
import { storage, db } from '../../services/fireBaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { v4 } from 'uuid'
import { useAuth } from '../../context/authContext'
import categorias from '../../categories'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AddProduct() {
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()

  const [productName, setProductName] = useState('')
  const [productDesc, setProductDesc] = useState('')
  const [productCategory, setProductCategory] = useState(categorias[0])
  const [productPrice, setProductPrice] = useState(0)
  const [productStock, setProductStock] = useState(0)
  const [productImage, setProductImage] = useState('')
  const [address, setAddress] = useState()

  const { user } = useAuth()

  const productsRef = collection(db, 'products')

  async function HandleAddProduct() {
    if (
      !image ||
      !productName ||
      !productPrice ||
      !productStock ||
      !productDesc ||
      !address
    ) {
      toast.error('Alguns campos não foram preenchidos.')
      return
    }
    await addDoc(productsRef, {
      productName: productName,
      productDesc: productDesc,
      productCategory: productCategory,
      productPrice: productPrice,
      productStock: productStock,
      productImage: productImage,
      productOwner: user && user.email,
      productLikes: 0,
      productAddress: address,
    })
  }

  useEffect(() => {
    UploadImage()
  }, [image])
  function handleCep(e) {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((result) => result.json())
      .then((data) => {
        setAddress(`${data.cep}, ${data.localidade} - ${data.uf}`)
        console.log('cep deu bom')
      })
      .catch(() => toast.error('Adicione um CEP válido.'))
  }
  function UploadImage() {
    if (!image) return

    const imgRef = ref(storage, `images/${image.name + v4()}`)

    uploadBytes(imgRef, image).then(() => {
      getDownloadURL(imgRef).then((url) => {
        setProductImage(url)
      })
    })
    console.log('nice')
  }
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full mt-12 mb-24">
        <form className="shadow-lg md:w-4/5 sm:w-5/6 lg:w-2/4 p-8 bg-white">
          <h1 className="font-semibold text-3xl mb-6 text-indigo-900">
            Adicionar Produto
          </h1>
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
                  placeholder="Ex: Notebook usado durante 6 meses, bem reservado..."
                  onChange={(e) => setProductDesc(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <span>Foto do produto</span>
              <div className="flex flex-col items-center">
                <img
                  className="h-44 w-44 p-4 shadow mt-4 mb-1"
                  id="imgOutput"
                  src={preview}
                />
                <div className="flex items-center">
                  <label
                    htmlFor="upload"
                    className="px-2 py-1 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3 cursor-pointer shadow"
                  >
                    <p className="text-indigo-50">Escolher</p>
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
                {categorias.map((categoria) => (
                  <option key={v4()} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="CEP">CEP origem do produto</label>
            <input
              type="text"
              name="CEP"
              id="CEP"
              placeholder="CEP"
              className="outline-0 border-2 p-1 w-full"
              onBlur={(e) => handleCep(e)}
              maxLength={9}
            />
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
            className="px-4 py-2 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3 mt-3 shadow"
            type="button"
            onClick={HandleAddProduct}
          >
            <div className="flex items-center">
              <p className="pr-2 text-indigo-50 font-bold">Adicionar</p>
              <CaretRight className="text-white" />
            </div>
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  )
}
