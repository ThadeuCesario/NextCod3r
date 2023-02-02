import { ReactNode } from 'react';
import styles from '../src/styles/Cartao.module.css';

interface CartaoProps {
    bgColor?: string;
    children: ReactNode;
}

function Cartao(props: CartaoProps) {
    return (
        <div 
            className={styles.cartao} 
            style={{backgroundColor: props.bgColor || '#fff'}}
        >
            {props.children}
        </div>
    )
}

export default Cartao;