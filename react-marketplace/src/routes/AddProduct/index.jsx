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
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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
    }).then(() => navigate('/'))
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
        <form className="shadow-xl flex flex-col items-center p-12 shadow-indigo-200 rounded-3xl border border-indigo-200 md:w-4/5 sm:w-5/6 lg:w-2/4 p-8 bg-white">
          <h1 className="text-3xl mb-6 text-center font-medium text-indigo-900">
            Adicionar Produto
          </h1>
          <div className="md:flex gap-4 mb-4">
            <div>
              <div className="flex flex-col items-center">
                <span className="w-full font-medium">Foto do produto</span>
                <img
                  className="h-56 md:w-64 w-full rounded-2xl bg-gray-200"
                  id="imgOutput"
                  src={preview}
                />
                <div className="flex relative items-center">
                  <label
                    htmlFor="upload"
                    className="px-2 py-1 absolute right-[-45px] top-[-45px] border bg-indigo-500 rounded mb-3 cursor-pointer shadow"
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
            <div className="">
              <div className="flex flex-col mb-4">
                <label htmlFor="productName">
                  <p className="font-medium">Título do produto</p>
                </label>
                <input
                  className="outline-0 bg-gray-200 rounded-lg border-2 rounded px-3 py-2"
                  type="text"
                  id="productName"
                  placeholder="Ex: Notebook Lenovo"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="productDesc">
                  <p className="font-medium">Descrição</p>
                </label>
                <textarea
                  className="outline-0 border-2 rounded-lg bg-gray-200 px-3 py-2 w-full resize-none"
                  id="productDesc"
                  cols="30"
                  rows="5"
                  placeholder="Ex: Notebook usado durante 6 meses, bem reservado..."
                  onChange={(e) => setProductDesc(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-4 mt-2 flex flex-col md:flex-row gap-4 md:w-auto w-full">
            <div className="PREÇO E ESTOQUE flex gap-4 md:w-[256px] flex-col">
              <div className="flex flex-col">
                <label htmlFor="preco">
                  <p className="font-medium">Preço</p>
                </label>
                <input
                  type="number"
                  placeholder="R$"
                  className="outline-none w-44 rounded-lg bg-gray-200 border-2 p-1"
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="estoque">
                  <p className="font-medium">Estoque</p>
                </label>
                <input
                  type="number"
                  placeholder="Ex: 243"
                  className="outline-none w-44 rounded-lg bg-gray-200 border-2 p-1"
                  onChange={(e) => setProductStock(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex flex-col md:w-[311px] gap-4">
              <div className="flex flex-col">
                <label htmlFor="tags">
                  <p className="font-medium">Categoria do produto</p>
                </label>
                <select
                  className="border-2 p-1 h-[36px] rounded-lg bg-gray-200 outline-none"
                  onChange={(e) => setProductCategory(e.target.value)}
                >
                  <option value="Automóveis">Automóveis</option>
                  <option value="Eletrodomésticos">Eletrodomésticos</option>
                  <option value="Computadores">Computadores</option>
                  <option value="Celulares">Celulares</option>
                  <option value="Cama / Mesa / Banho">
                    Cama / Mesa / Banho
                  </option>
                  CEP origem do produto
                  <option value="Móveis">Móveis</option>
                  <option value="Livros">Livros</option>
                  <option value="Roupas">Roupas</option>
                  <option value="Acessorios">Acessorios</option>
                  <option value="Brinquedos">Brinquedos</option>
                  <option value="Sustentaveis">Sustentaveis</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="CEP">
                  <p className="font-medium">CEP origem do produto</p>
                </label>
                <input
                  type="text"
                  name="CEP"
                  id="CEP"
                  placeholder="CEP"
                  className="outline-0 rounded-lg bg-gray-200 border-2 p-1"
                  onBlur={(e) => handleCep(e)}
                  maxLength={9}
                />
                <span>{address}</span>
              </div>
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
