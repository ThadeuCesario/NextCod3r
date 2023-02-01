import PortaModel from "../model/porta";

function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtde}, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente);
    })
}

function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero;

        if(igualAModificada) return portaModificada;
        return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
    })
}

export {
    criarPortas,
    atualizarPortas
}