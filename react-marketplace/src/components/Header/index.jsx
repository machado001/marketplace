import { List } from 'phosphor-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import GGH from '../../assets/GGHNEW.svg'
import cart from '../../assets/cart.svg'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const itemNavBarClassName =
    'flex transition ease-in-out my-2 p-3 hover:bg-indigo-200 rounded-md cursor-pointer text-black text-sm'

  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  function changeProfile() {
    if (user) {
      return (
        <div className="flex gap-4 items-center">
          <img
            src={cart}
            alt="placeholder img"
            className="object-contain h-6 w-6"
          />

          <div className="w-16 h-16 relative flex flex-col justify-center items-center p-2 group cursor-pointer">
            <img
              className="rounded-full h-9 shadow "
              src={
                user && user.photoURL
                  ? user.photoURL
                  : 'https://www.shareicon.net/data/256x256/2016/05/27/771338_man_512x512.png'
              }
            />

            <div className="z-2 absolute shadow-lg w-[135px] top-16 h-0 truncate rounded-md group-hover:h-20 group-hover:flex hover:h-20 hover:flex bg-white border-2 px-2 py-1 transition-all flex-col">
              <p className="text-gray-800 p-1 w-full transition hover:bg-indigo-200 rounded-md">
                <Link to={'/profile'}>Profile</Link>
              </p>
              <p
                className="text-gray-800 p-1 w-full transition hover:bg-indigo-200 rounded-md"
                onClick={handleLogout}
              >
                Desconectar
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
      )
    } else {
      return (
        <div className="flex gap-4 items-center">
          <div className="h-16 relative gap-4 flex flex-row justify-between items-center">
            <p className="text-black border-2 rounded-md md:flex hidden px-3 py-2 font-bold cursor-pointer bg-indigo-600 text-indigo-100">
              <Link to="/register">Registrar-se</Link>
            </p>
            <p className="text-black border-2 rounded-md md:flex hidden px-3 py-2 font-bold cursor-pointer">
              <Link to={'/login'}>Entrar</Link>
            </p>
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
      )
    }
  }

  function handleMenuClick() {
    setMobileMenu((current) => !current)
  }

  const handleLogout = async () => {
    await logout()
    console.log(user)
  }

  if (loading) return <h1>carregando</h1>

  return (
    <header>
      <div className="px-6 py-0 w-full h-24 bg-white flex justify-between items-center z-[2] border-solid">
        <img
          src={GGH}
          alt="placeholder img"
          className="object-contain w-24 md:w-40"
          onClick={() => navigate('/')}
        />

        {changeProfile()}
      </div>
      <nav className="shadow h-0 md:h-full px-6 py-0 w-full bg-white flex justify-center items-center z-[2] border-solid border-grey border">
        <div className="flex justify-center w-full h-16">
          <div className="flex items-end">
            <ul
              className={
                mobileMenu
                  ? 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4  md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 bg-white top-[90px] opacity-100'
                  : 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4  md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 bg-white'
              }
            >
              <p className={itemNavBarClassName}>Categorias</p>
              <Link className={itemNavBarClassName} to="/produtos">
                Produtos recentes
              </Link>

              <Link className={itemNavBarClassName} to="/add-product">
                Adicionar produtos
              </Link>
              {!user && (
                <>
                  <li>
                    <p className="text-black border-2 rounded-md md:hidden flex px-3 py-2 font-bold cursor-pointer bg-indigo-600 text-indigo-100">
                      <Link to="/register">Registrar-se</Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-black border-2 rounded-md md:hidden flex px-3 py-2 font-bold cursor-pointer">
                      <Link to={'/login'}>Entrar</Link>
                    </p>
                  </li>
                </>
              )}
              {/* <p className="text-black border-2 rounded-md md:flex hidden px-3 py-2 font-bold cursor-pointer bg-indigo-600 text-indigo-100">
              <Link to="/register">Registrar-se</Link>
            </p>
            <p className="text-black border-2 rounded-md md:flex hidden px-3 py-2 font-bold cursor-pointer">
              <Link to={'/login'}>Entrar</Link>
            </p> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
