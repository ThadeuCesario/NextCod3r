import SomentePar from "../../components/SomentePar";

function condicional1() {
    const numeros = [13, 1235,342562,5642,12, 23, 56, 7,4, 456, 56, 875,2,3];

    return (
        <>
            {numeros.map(numero => <SomentePar numero={numero} />)}
        </>
    )
}

export default condicional1;