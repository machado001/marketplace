import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import productsDb from '../../products'
import { ArchiveBox, ShoppingCart, Truck } from 'phosphor-react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ProductPage() {
  const { id } = useParams()

  const newProduct = productsDb()
  const product = newProduct.filter((product) => product.id === id)[0]
  console.log(newProduct)
  let [productsCounter, setProductsCounter] = useState(1)
  let [totalPrice, setTotalPrice] = useState(product.productPrice)

  useEffect(() => {
    setTotalPrice(product.productPrice * productsCounter)
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
    <div className="relative">
      <Header />
      <div className="flex my-8 justify-center items-center">
        <div className="product gap-8 w-5/6 px-7 flex md:flex-row flex-col md:justify-center">
          <div className="mt-8 md:mt-0">
            <img src={product.productImage} alt="" />
          </div>
          <div className="PRODUCT-INFOS h-5/6 flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="absolute top-[110px] md:static md:top-0 text-2xl md:text-3xl">
                {product.productName}
              </span>
              <span className="text mb-4">{product.productDesc}</span>
            </div>

            <span className="text text-green-800 text-3xl font-bold">
              R${product.productPrice}
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
              <div>
                <div className="flex gap-1 items-center">
                  <Truck /> <span>Frete</span>
                </div>
                <div>CEP origem: {product.productAddress}</div>
              </div>
              <hr className="mb-16" />
              <div className="flex flex-col">
                <span>Total: R${totalPrice}</span>
                <button className="md:w-32 flex items-center justify-center md:justify-between gap-2 bg-indigo-400 py-2 px-4 mb-1 rounded font-semibold">
                  Comprar <ShoppingCart />
                </button>
                <button className="md:w-52 text-center flex items-center justify-center md:justify-between gap-2 bg-indigo-200 py-2 px-4 rounded font-semibold">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
