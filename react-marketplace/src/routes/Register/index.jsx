import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GGH from '../../assets/GGH.svg'

export function Register() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(user.email, user.password).then(
      (e) => (e.user.displayName = userName)
    )
    navigate('/')
  }

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value })
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center">
      <div className="shadow-lg bg-white md:w-2/4 w-5/6 p-8">
        <header className="header">
          <img src={GGH} alt="ggh logo" className="mb-6" />
          <h1 className="font-semibold text-3xl w-full mb-6 text-indigo-900">
            Registre-se
          </h1>
        </header>
        <form>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              className="outline-0 border-2 rounded px-3 py-2 w-full"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Seu email"
              onChange={handleChange}
              className="outline-0 border-2 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              onChange={handleChange}
              className="outline-0 border-2 rounded px-3 py-2 w-full"
            />
          </div>
          <button
            className="px-4 py-2 border bg-indigo-400 rounded mb-3"
            onClick={handleSubmit}
            type="button"
          >
            <p className="pr-2 text-white font-bold">Cadastrar</p>
          </button>
          <div className="md:flex md:items-center mb-4">
            <p>Já possui uma conta?</p>
            <Link
              className="md:ml-1 text-indigo-600 font-semibold underline"
              to="/login"
            >
              Acesse aqui
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
