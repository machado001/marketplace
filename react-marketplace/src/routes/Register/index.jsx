import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/fireBaseConfig'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GGH from '../../assets/GGH.svg'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  function handleSignUp(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.displayName = name
        console.log(result)
        toast.success('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        toast.error('Algo deu errado 😔')
      })
  }
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
              onChange={(e) => setName(e.target.value)}
              className="outline-0 border-2 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-0 border-2 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              onChange={(e) => setPassword(e.target.value)}
              className="outline-0 border-2 rounded px-3 py-2 w-full"
            />
          </div>
          <button
            className="px-4 py-2 border bg-indigo-400 rounded mb-3"
            onClick={handleSignUp}
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
