import Linha from '@/components/Linha';
import styles from '../styles/Tabuleiro.module.css';

function Tabuleiro() {
  const linhas = Array(8).fill('');

  return (
    <div className={styles.container}>
      <div className={styles.tabuleiro}>
        {linhas.map((linha, index) => <div key={index}><Linha colorInit={(index % 2 === 0 ? 'branco' : 'preto')}/></div>)}
      </div>
    </div>
  )
}

export default Tabuleiro;