import react from '../../assets/react.svg'
import { CaretRight } from 'phosphor-react'
export default function AddProduct() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      <form className="shadow md:w-4/5 sm:w-5/6 lg:w-2/4 p-8">
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
              ></textarea>
            </div>
          </div>
          <div>
            <span>Foto do produto</span>
            <div className="flex flex-col items-center">
              <img src={react} className="h-44 p-4 shadow mt-4 mb-1" />
              <button
                type="button"
                className="px-2 py-1 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3"
              >
                <p className="text-indigo-50">Escolher foto</p>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-4 mt-2">
          <div className="flex flex-col">
            <label htmlFor="tags">Categoria do produto</label>
            <select className="border-2 p-1 outline-none md:w-2/4">
              <option>Eletrônicos</option>
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
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="estoque">Estoque</label>
            <input
              type="number"
              placeholder="Ex: 243"
              className="outline-none border-2 p-1"
            />
          </div>
        </div>
        <button
          className="px-4 py-2 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3 mt-3"
          type="button"
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
