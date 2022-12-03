import productsMock from '../../productsMock'
import { v4 } from 'uuid'
import { CaretRight } from 'phosphor-react'
import { useState } from 'react'

export default function Produtos() {
  const [price, setPrice] = useState(10)
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState(productsMock)

  function handleFilteringbyPrice(filter) {
    const newProducts = productsMock.filter(
      (product) => product.productPrice <= filter
    )
    setProducts(newProducts)
  }
  function handleFilteringbyCategory(filter) {
    // const newProducts = productsMock.filter(
    //   (product) => product.productCategory === filter
    // )
    console.log(category)
  }
  return (
    <div className="flex justify-center">
      <div className="w-full flex flex-col gap-8  w-[30%] h-[90vh]">
        <div className="pesquisa">
          Filtre por nome
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-10 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-5 outline-0"
                placeholder="Ex: Geladeira"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 transition bottom-2.5 bg-indigo-600 hover:bg-indigo-800 font-medium rounded-lg text-sm px-3 py-2"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-indigo-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="categorias">
          Liste por categoria
          <form className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="radio"
                id="Nenhum"
                value="Nenhum"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Nenhum">Nenhum</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Computadores"
                value="Computadores"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Computadores">Computadores</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Roupas"
                value="Roupas"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Roupas">Roupas</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Celulares"
                value="Celulares"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Celulares">Celulares</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Automóveis"
                value="Automóveis"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Automóveis">Automóveis</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="Eletrodomésticos"
                value="Eletrodomésticos"
                name="categorySelected"
                onChange={
                  ((e) => setCategory(e.target.value),
                  handleFilteringbyCategory(category))
                }
              />
              <label htmlFor="Eletrodomésticos">Eletrodomésticos</label>
            </div>
          </form>
        </div>
        <div className="preços">
          Filtre por preço
          <div className="w-full">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="button" onClick={() => handleFilteringbyPrice(price)}>
              aplica
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60%] gap-4 justify-center flex flex-wrap">
        {products.map((product) => (
          <div
            key={v4()}
            className="item-div border min-w-[200px] h-[345px] m-1 rounded shadow-lg border-solid border-gray-300 bg-zinc-50"
          >
            <img
              src={product.productSrc}
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
    </div>
  )
}
