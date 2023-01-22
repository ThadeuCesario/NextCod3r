/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

function buscar() {
  const router = useRouter();
  const {query: { id, nome }} = useRouter();

  console.log(router);

  return (
    <div>
      <h1>Nome: {nome} | Código: {id}</h1>
    </div>
  );
}

export default buscar;
