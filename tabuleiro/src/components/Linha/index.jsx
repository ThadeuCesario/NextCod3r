import styles from "./Linha.module.css";

function Linha(props) {
  const { colorInit } = props;

  const quadrados = Array(8).fill();

  return (
    <div className={styles.containerLinha}>
      {quadrados.map((quadrado, index) => (
        <div
          key={index}
          className={`${styles.quadrado} ${
            index % 2 === 0 && colorInit === "branco"
              ? styles.branco
              : colorInit === "branco"
              ? styles.preto
              : index % 2 === 0
              ? styles.preto
              : styles.branco
          }`}
        >
          {quadrado}
        </div>
      ))}
    </div>
  );
}

export default Linha;
