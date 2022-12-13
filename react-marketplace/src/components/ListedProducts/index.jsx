import { CaretRight, Heart } from 'phosphor-react'
import { v4 } from 'uuid'
import imgplaceholder from '../../assets/images/placeholderimg.jpg'

import { Link } from 'react-router-dom'

const ListedProducts = ({ products }) => {
  return (
    <div className="md:w-[60%] gap-[3px] justify-center flex flex-wrap">
      {products.map((product) => (
        <div
          key={v4()}
          className="item-div border h-[345px] rounded shadow-lg border-solid border-gray-300 bg-zinc-50"
        >
          <img
            src={product.productImage ? product.productImage : imgplaceholder}
            drag="x"
            alt="Highlight-Items"
            className="rounded max-w-[170px] h-[170px] pointer-events-none mx-auto shadow-sm my-3 "
          />
          <ul className="space-y-4 mx-5">
            <li className="h-8 w-36 truncate">
              <span
                title={product.productName}
                className=" rounded cursor-default w-full"
              >
                {product.productName}
              </span>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-lime-700 font-bold rounded cursor-default">
                  R${product.productPrice}
                </span>
                <div className="flex items-center gap-1">
                  likechecker tava aqui
                </div>
              </div>
            </li>
            <li>
              <Link
                className="rounded bg-indigo-200 p-2 font-medium flex items-center justify-between w-28"
                to={`/product/${product.id}`}
              >
                Detalhes <CaretRight />
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ListedProducts
