import Presente from "../components/Presente";
import PortaModel from "../model/porta";
import styles from "../src/styles/Porta.module.css";

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

function Porta(props: PortaProps) {
  const { value, onChange } = props;

  const selecionada = (value.selecionada && !value.aberta) ? styles.selecionada : "";

  const alternarSelecao = (e) => onChange(value.alternarSelecao());
  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(value.abrir());
  };

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {value.fechada ? (
          <div className={styles.porta}>
            <div className={styles.numero}>{value.numero}</div>
            <div className={styles.macaneta} onClick={abrir} />
          </div> ) : (
            value.temPresente ? (
              <Presente />
            ) : null
          )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;
