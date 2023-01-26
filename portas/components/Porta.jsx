import styles from "../src/styles/Porta.module.css";

function Porta({selecionada}) {

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada ? styles.selecionada : ''}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta} />
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;
