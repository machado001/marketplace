import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { productsDb } from '../../products'
import { ArchiveBox, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ProductPage() {
  const { id } = useParams()

  const newProduct = productsDb()
  const product = newProduct.filter((product) => product.id === id)[0]
  console.log(newProduct)
  let [productsCounter, setProductsCounter] = useState(1)
  let [productPrice, setProductPrice] = useState(product.productPrice)

  useEffect(() => {
    setProductPrice(product.productPrice * productsCounter)
  }, [productsCounter])

  function incrementProduct() {
    if (productsCounter === Number(product.productStock)) return
    setProductsCounter(productsCounter + 1)
  }
  function decrementProduct() {
    if (productsCounter === 1) return
    setProductsCounter(productsCounter - 1)
  }
  function handleStockChange(e) {
    if (e >= Number(product.productStock)) {
      setProductsCounter(product.productStock)
    } else if (e < 0) {
      setProductsCounter(1)
    } else {
      setProductsCounter(e)
    }
  }
  function blurValidation(e) {
    if (e < 0 || e === '') {
      setProductsCounter(1)
    }
  }
  return (
    <>
      <Header />
      <div className="flex mt-8  justify-center items-center">
        <div className="product h-screen gap-4 md:w-2/4 w-5/6 px-7 flex justify-between">
          <div>
            <img className="" src={product.productImage} alt="" />
          </div>
          <div className="PRODUCT-INFOS flex flex-col">
            <span className="text text-3xl">{product.productName}</span>
            <span className="text mb-4">{product.productDesc}</span>
            <span className="text text-green-800 text-3xl font-bold">
              R${productPrice}
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex justify items-center gap-2">
                Estoque:
                <ArchiveBox />
                {product.productStock}
              </div>

              <div className="flex mb-4 font-bold items-center justify">
                <button
                  onClick={decrementProduct}
                  className=" border border-slate-400 border-r-0 w-8"
                >
                  -
                </button>
                <input
                  className=" border outline-0 border-slate-400 w-8 text-center"
                  onChange={(e) => handleStockChange(e.target.value)}
                  value={productsCounter}
                  onBlur={(e) => blurValidation(e.target.value)}
                />

                <button
                  onClick={incrementProduct}
                  className=" border border-slate-400 border-l-0 w-8"
                >
                  +
                </button>
              </div>
              <hr />
              <div className="flex justify">
                <button className="w-32 mt-4 flex items-center justify-between gap-2 bg-indigo-400 py-2 px-4 rounded font-semibold">
                  Comprar <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
