import listaProdutos from "../../data/listaProdutos"

export default function repeticao2() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {listaProdutos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}