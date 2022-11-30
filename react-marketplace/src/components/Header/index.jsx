const itemNavBarClassName = "transition ease-in-out my-2 p-3 hover:bg-red-200 rounded-md md:text-center"

export function Header() {
import { List } from 'phosphor-react'
import { useState } from 'react'
const itemNavBarClassName =
  'transition ease-in-out my-2 p-3 hover:bg-red-200 rounded-md cursor-pointer'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  function handleMenuClick(e) {
    console.log(e.target.dataset.name)
    e.target.dataset.name === 'menu'
    setMobileMenu((current) => !current)
  }
  return (
    <header>
      <nav className="shadow px-6 py-2 w-full bg-red-100 flex justify-between items-center z-[2]">
        <div className="md:flex">
          <img
            src="https://via.placeholder.com/75"
            alt="placeholder img"
            className="rounded-full mr-2 w-[75px] h-[75px]"
          />
          <ul
            className={
              mobileMenu
                ? 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 bg-red-100 md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 top-[90px] opacity-100'
                : 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 bg-red-100 md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500'
            }
          >
            <li className={itemNavBarClassName}>
              <a href="#">Destaques</a>
            </li>
            <li className={itemNavBarClassName}>
              <a href="#">Produtos recentes</a>
            </li>
            <li className={itemNavBarClassName}>
              <a href="#">Adicionar produtos</a>
            </li>
            <li className={itemNavBarClassName}>
              <a href="#">Categorias</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="placeholder img"
            className="rounded-full w-[50px] h-[50px] mr-6"
          />
          <List
            size={32}
            className="cursor-pointer md:hidden"
            onClick={handleMenuClick}
            data-name="menu"
          />
        </div>
      </nav>
    </header>
  )
}}
