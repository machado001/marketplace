import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(`errozada dog`, error)
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-[100vh]"
    >
      <h1>Oops!</h1>
      <p>Essa pagina não existe! </p>
      Mensagem do Erro:
      <i> {error.statusText || error.message}</i>
      <br />
      Número do erro:
      <i className="font-black text-9xl">{error.status}</i>
      <p className="font-bold text-2xl">
        razões para me contratar, acesse: <br />
        <a
          href="https://www.linkedin.com/in/gustavsant/"
          className="text-indigo-600 hover:animate-pulse"
          target="_blank"
        >
          Meu Linkedin!
        </a>
      </p>
    </div>
  )
}
