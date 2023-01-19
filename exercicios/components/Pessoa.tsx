
interface PessoaProps {
    nome: string;
    idade?: number;
}

function Pessoa(props: PessoaProps) {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Nome: {props.idade || 'Não informada'}</div>
        </div>
    )
}

export default Pessoa;