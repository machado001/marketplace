import { CaretRight } from 'phosphor-react'
import { v4 } from 'uuid'
import imgplaceholder from '../../assets/images/placeholderimg.jpg'


const ListedProducts = ({products}) => {
  return (
    <div className="w-[60%] gap-4 justify-center flex flex-wrap">
        {products.map((product) => (
          <div
            key={v4()}
            className="item-div border min-w-[200px] h-[345px] m-1 rounded shadow-lg border-solid border-gray-300 bg-zinc-50"
          >
            <img
              src={product.productImage ? product.productImage : imgplaceholder}
              drag="x"
              alt="Highlight-Items"
              className="rounded max-w-[170px] h-[170px] pointer-events-none mx-auto shadow-sm my-3 "
            />
            <ul className="space-y-4 ml-5">
              <li className="h-8 w-36 truncate">
                <span
                  title={product.productName}
                  className=" rounded cursor-default w-full"
                >
                  {product.productName}
                </span>
              </li>
              <li>
                <span className="text-lime-700 font-bold rounded cursor-default">
                  R${product.productPrice}
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=dKD4o-jrvTE"
                  className="rounded bg-indigo-200 p-2 font-medium flex items-center justify-between w-28"
                >
                  Detalhes <CaretRight />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
  )
}

export default ListedProducts