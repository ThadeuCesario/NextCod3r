import { useState } from "react";
import { criarPortas, atualizarPortas } from "../../functions/portas";

import Porta from "../../components/Porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(10, 2));

  return (
    <div>
      <h1>Retornar</h1>
    </div>
  )
}
