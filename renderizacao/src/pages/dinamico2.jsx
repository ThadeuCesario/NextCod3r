export async function getServerSideProps() {
    console.log('[Server] gerando props para o componente...');

    const response = await fetch('http://localhost:3000/api/produtos'); // returns a promise
    const produtos = await response.json(); // returns a promise

    return {
        props: {
            produtos
        }
    }
}

function dinamico2(props) {
    function renderizarProdutos() {
        return props.produtos.map(produto => (
            <li key={produto.id}>
                {produto.id}: {produto.nome} - R${produto.preco}
            </li>
        )) 
    }

    return (
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}

export default dinamico2;