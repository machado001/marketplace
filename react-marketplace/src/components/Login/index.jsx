import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/fireBaseConfig'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  function handleLogin(e) {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  if (user) {
    return console.log(user)
  }

  return (
    <div className="border md:w-3/5 w-4/5 mx-auto my-6 h-[70vh] flex flex-col items-center justify-center">
      <header className="">
        <h1 className="">Faça Login</h1>
      </header>

      <form>
        <div className="">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha ?</a>

        <button className="" onClick={handleLogin}>
          Entrar
        </button>
        <div className="">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  )
}
