function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]


    return (
        <ul>
            {listaAprovados.map(aprovado => <li>{aprovado}</li>)}
        </ul>
    )
}


export default repeticao1;