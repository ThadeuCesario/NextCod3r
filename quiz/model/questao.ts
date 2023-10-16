import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;
    // #respondida: boolean;

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
        // this.#respondida = false;
    }

    get id() {
        return this.#id;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get respostas() {
        return this.#respostas;
    }

    get acertou() {
        return this.#acertou;
    }

    get respondida() {
        this.#respostas.forEach(resposta => {
            if(resposta.revelada) return true;
        })
        return false;
    }

    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resposta => resposta.paraObjeto()),
            acertou: this.#acertou
        }
    }
}