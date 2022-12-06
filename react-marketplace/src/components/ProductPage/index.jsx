import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import productsDB from '../../products'
import { ArchiveBox, ShoppingCart } from 'phosphor-react'

export default function ProductPage() {
  const { id } = useParams()
  const product = productsDB.filter((product) => product.id === id)[0]
  console.log(product)

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="product h-screen w-2/4 border-4 px-7 flex justify-between">
          <div className="PRODUCT-IMG border-4">
            <img src={product.productImage} alt="" />
          </div>
          <div className="PRODUCT-INFOS flex flex-col">
            <span className="text-end text-3xl">{product.productName}</span>
            <span className="text-end text-lg">{product.productDesc}</span>
            <span className="text-end font-bold">R${product.productPrice}</span>
            <div className="flex  ml-auto flex-col gap-1">
              <div className="flex items-center gap-2">
                <ArchiveBox />
                {product.productStock}
              </div>
              <button className="w-32 flex items-center justify-between gap-2 bg-indigo-400 py-2 px-4 rounded font-semibold">
                Comprar <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
