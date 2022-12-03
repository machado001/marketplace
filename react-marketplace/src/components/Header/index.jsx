import { getAuth } from 'firebase/auth'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import GGH from '../../assets/GGH.svg'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const itemNavBarClassName =
    'transition ease-in-out my-2 p-3 hover:bg-indigo-500 rounded-md cursor-pointer'

  const { user, logout, loading } = useAuth()

  function handleMenuClick() {
    setMobileMenu((current) => !current)
  }

  const handleLogout = async () => {
    await logout()
  }

  if (loading) return <h1>carregando</h1>

  return (
    <header>
      <h1>aaaa </h1>
      <button onClick={handleLogout}>Logout</button>
      <nav className="shadow px-6 py-2 w-full bg-indigo-400 flex justify-between items-center z-[2]">
        <div className="flex justify-between w-full z-[99999]">
          <div className="flex items-center">
            <img src={GGH} alt="placeholder img" className="mr-3" />
            <ul
              className={
                mobileMenu
                  ? 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 bg-indigo-400 md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 top-[90px] opacity-100'
                  : 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 bg-indigo-400 md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500'
              }
            >
              <li className={itemNavBarClassName}>
                <Link to="/produtos">Produtos recentes</Link>
              </li>
              <li className={itemNavBarClassName}>
                <Link to="/add-product">Adicionar produtos</Link>
              </li>
              <li className={itemNavBarClassName}>
                <Link to="/login">Categorias</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 relative flex flex-col justify-center items-center p-2 group cursor-pointer">
              <img
                className="rounded-full h-12 shadow "
                src={
                  user && user.photoURL
                    ? user.photoURL
                    : 'https://www.shareicon.net/data/256x256/2016/05/27/771338_man_512x512.png'
                }
                alt=""
              />
              <div className="absolute shadow-lg w-[86px] top-16 h-0 truncate rounded-md group-hover:h-20 group-hover:flex bg-indigo-500 px-2 py-1 transition-all flex-col justify-evenly">
                <p className="text-gray-800 p-1 w-full transition hover:bg-indigo-600 rounded-md">
                  <Link to={'/profile'}>Perfil</Link>
                </p>
                <p
                  className="text-gray-800 p-1 w-full transition hover:bg-indigo-600 rounded-md"
                  onClick={handleLogout}
                >
                  Sair
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <List
                size={32}
                className="cursor-pointer md:hidden"
                onClick={handleMenuClick}
                data-name="menu"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
