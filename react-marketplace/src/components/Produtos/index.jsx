import productsDb from '../../products'
import { useState } from 'react'
import { useEffect } from 'react'

import ListedProducts from '../ListedProducts'

export default function Produtos() {
  const productsDB = productsDb()
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('Nenhum')
  const [products, setProducts] = useState(productsDB)
  const [search, setSearch] = useState('')

  useEffect(() => {
    handleFilteringbyCategory()
  }, [category])
  useEffect(() => {
    handleFilteringbySearch()
  }, [search])

  function handleFilteringbySearch() {
    if (search === '') {
      setProducts(productsDB)
    } else {
      const newProducts = productsDB.filter((product) =>
        product.productName.toUpperCase().includes(search.toUpperCase())
      )
      setProducts(newProducts)
    }
  }
  function handleFilteringbyPrice(filter) {
    if (Number(filter) === 0) {
      return
    }
    const ProductsFiltred = productsDB.filter(
      (product) => Number(product.productPrice) <= Number(filter)
    )
    setProducts(ProductsFiltred)
  }
  function handleFilteringbyCategory() {
    if (category === 'Nenhum') {
      setProducts(productsDB)
    } else {
      const ProductsFiltred = productsDB.filter(
        (product) => product.productCategory === category
      )
      setProducts(ProductsFiltred)
    }
  }
  return (
    <div className="flex justify-center my-36">
      {console.log(productsDb())}
      <div className="w-full flex flex-col gap-4  w-[30%] h-[90vh]">
        <div className="pesquisa">
          Filtre por nome
          <div className="w-full">
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
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-5 outline-0"
                placeholder="Ex: Geladeira"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="categorias">
          Liste por categoria
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="radio"
                id="Nenhum"
                value="Nenhum"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Nenhum">Nenhum</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Automóveis"
                value="Automóveis"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Automóveis">Automóveis</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Cama / mesa / banho"
                value="Cama / mesa / banho"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Cama / mesa / banho">Cama / mesa / banho</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Celulares"
                value="Celulares"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Celulares">Celulares</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Computadores"
                value="Computadores"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Computadores">Computadores</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Eletrodomésticos"
                value="Eletrodomésticos"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Eletrodomésticos">Eletrodomésticos</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Ferramentas"
                value="Ferramentas"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Ferramentas">Ferramentas</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Móveis"
                value="Móveis"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Móveis">Móveis</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="Outros"
                value="Outros"
                name="categorySelected"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Outros">Outros</label>
            </div>

            {/* {categories.map((category) => (
              <div className="flex gap-2" key={v4()}>
                <input
                  type="radio"
                  id={category}
                  value={category}
                  name="categorySelected"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))} */}
          </div>
        </div>
        <hr />
        <div className="preços">
          Filtre por preço <br />
          (valor máximo)
          <div className="w-full">
            <input
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-5 outline-0"
              type="number"
              value={price}
              placeholder="Ex: 400"
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              className="rounded py-1 px-2 bg-indigo-200 mt-2"
              type="button"
              onClick={() => handleFilteringbyPrice(price)}
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
      <ListedProducts products={products} />
    </div>
  )
}
