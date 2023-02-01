/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useState } from "react";
import { criarPortas, atualizarPortas } from "../../../../functions/portas";
import Porta from "../../../../components/Porta";
import styles from "../../../styles/Jogo.module.css";
import { useRouter } from "next/router";


function jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query])

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