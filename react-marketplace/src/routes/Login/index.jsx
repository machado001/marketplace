import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight, GoogleLogo } from 'phosphor-react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/fireBaseConfig'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GGH from '../../assets/GGH.svg'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  function handleGoogleSignup() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        toast(`Seja bem vindo! ${result.user.displayName}`)
      })
      .catch((error) => {
        console.log(error)
        toast.error('Algo deu errado 😔')
      })
  }
  function handleLogin() {
    signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = getAuth().currentUser
        console.log(user)
        toast(`Seja bem vindo! ${user.user.displayName}`)
      })
      .catch((error) => {
        console.log(error)
        toast.error('Algo deu errado 😔')
      })
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="shadow-lg bg-white md:w-2/4 w-5/6 p-8">
        <header>
          <img src={GGH} alt="ggh logo" className="mb-6" />
          <h1 className="font-semibold text-3xl w-full mb-6 text-indigo-900">
            Faça Login
          </h1>
        </header>
        <form className="">
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
          <p className="mb-3">
            <a className="text-indigo-600" href="#">
              Esqueceu sua senha?
            </a>
          </p>
          <button
            className="px-4 py-2 border bg-gradient-to-b from-indigo-500 to-indigo-400 rounded mb-3"
            onClick={handleLogin}
            type="button"
          >
            <div className="flex items-center">
              <p className="pr-2 text-indigo-50 font-bold">Entrar</p>
              <CaretRight className="text-white" />
            </div>
          </button>
          <div className="md:flex md:items-center mb-6">
            <p>Não possui uma conta? </p>
            <Link
              className="md:ml-1 text-indigo-600 underline font-semibold"
              to="/register"
            >
              Registre-se
            </Link>
          </div>
          <div className="border relative mb-4">
            <div className="absolute inset-x-1/2 translate-y-[-50%] translate-x-[-50%] font-semibold text-gray-500 bg-white text-center w-[130px]">
              <p>Ou use o Google</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="border rounded-full p-2 bg-gradient-to-b from-indigo-600 to-indigo-400 hover:scale-110 transition-transform shadow-md"
              onClick={handleGoogleSignup}
            >
              <GoogleLogo size={24} weight="bold" className="text-white" />
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
