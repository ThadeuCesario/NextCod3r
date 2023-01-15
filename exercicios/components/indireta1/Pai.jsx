import Filho from "./Filho";

function Pai() {
    function printar(data) {
        console.log("printar alguma coisa na tela:" , data);
    }

    return (
        <div>
            <Filho printar={printar} />
        </div>
    )
}

export default Pai;