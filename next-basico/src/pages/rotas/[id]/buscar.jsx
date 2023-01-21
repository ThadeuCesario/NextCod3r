/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

function buscar() {
  const router = useRouter();
  const {query: { id }} = useRouter();

  console.log(router);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default buscar;
