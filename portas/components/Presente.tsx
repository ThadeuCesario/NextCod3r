import styles from "../src/styles/Presente.module.css";

function Presente() {
    return (
        <div className={styles.presente}>
            <div className={styles.tampa} />
            <div className={styles.caixa} />
            <div className={styles.laco1} />
            <div className={styles.laco2} />
        </div>
    )
}

export default Presente;