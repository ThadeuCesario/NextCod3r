/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import {useRouter} from "next/router";

function rotas() {
    const router = useRouter();

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParam() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: "Thadeu"
            }
        })
    }

    return (
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href={"/rotas/params?id=12&nome=Next"}>
                    <li>Params</li>
                </Link>

                <Link href={"/rotas/123/buscar"}>
                    <li>Buscar</li>
                </Link>

                <Link href={"/rotas/123/Daniel"}>
                    <li>Buscar Nome</li>
                </Link>
            </ul>

            <div>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123/Daniel")}>Buscar Nome</button>
                <button onClick={() => navegacaoComParam()}>Buscar Params</button>
            </div>
        </div>
    )
}

export default rotas;