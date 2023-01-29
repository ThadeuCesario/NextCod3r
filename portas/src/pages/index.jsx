import { useState } from "react";
import { criarPortas, atualizarPortas } from "../../functions/portas";

import Porta from "../../components/Porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(10, 2));

  function renderizarPortas() {
    return portas.map((porta) => (
      <Porta 
        key={porta.numero} 
        value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
      />
    ))
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {renderizarPortas()}
    </div>
  )
}
