import Item from "../../components/Item";
import Lista from "../../components/Lista";

function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Pão" />
                <Item conteudo="Manteiga" />
                <Item conteudo="Presunto" />
                <Item conteudo="Queijo" />
            </Lista>
        </div>
    )
}

export default componenteComFilho;