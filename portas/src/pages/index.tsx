import { useState } from "react";
import Cartao from "../../components/Cartao";
import styles from "../styles/Formulario.module.css";
import Link from "next/link";
import EntradaNumerica from "../../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);


  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c039">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} text={"Qtde Portas?"} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica value={comPresente} onChange={comPresente => setComPresente(comPresente)} text={"Porta com Presente?"} />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
