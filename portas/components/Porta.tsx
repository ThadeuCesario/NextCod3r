import styles from "../src/styles/Porta.module.css";
import PortaModel from "../model/porta";

interface PortaProps {
  porta: PortaModel
}

function Porta(props: PortaProps) {
  const { porta: {selecionada, numero} } = props;

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada ? styles.selecionada : ''}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{numero}</div>
          <div className={styles.macaneta} />
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;
