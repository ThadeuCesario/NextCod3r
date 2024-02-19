import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Temporizador.module.css';

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors={["#bce596", "#F7B801", "#A30000"]}
                colorsTime={[10,3,0]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>

        </div>
    )
}