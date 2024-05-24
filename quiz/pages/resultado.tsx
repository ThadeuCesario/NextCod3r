/* eslint-disable react-hooks/rules-of-hooks */
import Estatistica from '@/components/Estatistica';
import styles from '../styles/Resultado.module.css';
import Botao from '@/components/Botao';
import { useRouter } from "next/router"

export default function resultado() {
    const router = useRouter();

    const total = +router.query.total;
    const certas = +router.query.certas;
    const percentual = Math.round((certas / total) * 100);

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: 'flex'}}>
                <Estatistica texto='Perguntas' valor={total} />
                <Estatistica texto='Certas' corFundo='#9cd2a4' valor={certas} />
                <Estatistica texto='Percentual' corFundo='#de6a33'  valor={`${percentual}%`} />
            </div>
            <Botao href='/' texto='Tentar Novamente'/>
        </div>
    )
}