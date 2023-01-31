/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useState } from "react";
import { criarPortas, atualizarPortas } from "../../functions/portas";
import Porta from "../../components/Porta";
import styles from "../styles/Jogo.module.css";


function jogo() {

  function renderizarPortas() {
    const [portas, setPortas] = useState(criarPortas(10, 2));

    return portas.map((porta) => (
      <Porta 
        key={porta.numero} 
        value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
      />
    ))
  }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
              <Link href="/">
                <button>Reiniciar Jogo</button>
              </Link>
            </div>
        </div>
    )
}

export default jogo;