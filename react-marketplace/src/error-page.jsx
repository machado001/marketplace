import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(`errozada dog`,error)
    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Essa pagina não existe! </p>
            <p>
                Mensagem do Erro: 
                <i> {error.statusText || error.message}</i>
                <br />
                Número do erro:
                <i> 
                    {error.status}
                </i>

            </p>
        </div>
    )
}