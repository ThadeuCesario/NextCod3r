/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";

function params() {
  // http://localhost:3000/rotas/params?nome=thadeu
  const router = useRouter();
  const {
    query: { nome, id },
  } = router;
  console.log(router);

  return (
    <div>
      <h1>
        Nome: {nome} | Código: {id}
      </h1>

      <Link href={"/rotas"}>
        <button type="button">Home</button>
      </Link>
    </div>
  );
}

export default params;
