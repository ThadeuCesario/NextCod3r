/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

function params() {
  // http://localhost:3000/rotas/params?nome=thadeu  
  const router = useRouter();
  const {query: {nome}} = router;
  console.log(router);

  return <div>{nome}</div>;
}

export default params;
