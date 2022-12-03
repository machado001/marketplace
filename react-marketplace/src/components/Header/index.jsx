import { getAuth } from 'firebase/auth'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import GGH from '../../assets/GGH.svg'
import cart from '../../assets/cart.svg'
import notification from '../../assets/notification.svg'
import message from '../../assets/message.svg'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const itemNavBarClassName =
    'transition ease-in-out my-2 p-3 hover:bg-indigo-500 rounded-md cursor-pointer text-black text-sm'

  const { user, logout, loading } = useAuth()

  function changeProfile() {
    if (user) {
      return  <div className="flex gap-4 items-center">
        <img src={cart} alt="placeholder img" class="object-contain h-6 w-6" />
        <img src={notification} alt="placeholder img" class="object-contain h-6 w-5" />
        <img src={message} alt="placeholder img" class="object-contain h-6 w-6" />
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
        
        <div className="absolute shadow-lg w-[156px] top-16 h-0 truncate rounded-md group-hover:h-20 group-hover:flex bg-white border-2 px-2 py-1 transition-all flex-col">
          <p className="text-gray-800 p-1 w-full transition hover:bg-indigo-600 rounded-md">
            <Link to={'/profile'}>Profile</Link>
          </p>
          <p
            className="text-gray-800 p-1 w-full transition hover:bg-indigo-600 rounded-md"
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
    }
    else {
      return <div className="flex gap-4 items-center">
      <div className="w-22 h-16 relative flex flex-row justify-center items-start p-8 group cursor-pointer">
          <p className="text-black p-2 w-full ">
            <Link to={'/login'}>Entrar</Link>
          </p>
          <p
            className="text-black p-1 w-full"
          >
            <Link to="/register">Não tem uma conta? se registre.</Link>
            
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
      <div className="px-6 py-0 w-full h-24 bg-white flex justify-evenly items-center z-[2] border-solid">
      <img src={GGH} alt="placeholder img" class="object-contain h-15 w-40" />
<form class="w-1/4">   
    <label for="default-search" class="mb-10 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products." required />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
{changeProfile()}
      </div>
      <nav className="shadow px-6 py-0 w-full h-full bg-white flex justify-center items-center z-[2] border-solid border-grey border">
        
        <div className="flex justify-center w-full h-16 z-[99999]">
          <div className="flex items-end">
            
            <ul
              className={
                mobileMenu
                  ? 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4  md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 top-[90px] opacity-100'
                  : 'gap-3 md:flex justify-between md:items-center justify-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4  md:p-0 p-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500'
              }
            >
              <li className={itemNavBarClassName}>
                <Link to="/login">Categorias</Link>
              </li>
              <li className={itemNavBarClassName}>
                <Link to="/produtos">Produtos recentes</Link>
              </li>
              <li className={itemNavBarClassName}>
                <Link to="/add-product">Adicionar produtos</Link>
              </li>
            </ul>
          </div>
         
        </div>
      </nav>
    </header>
  )
}
