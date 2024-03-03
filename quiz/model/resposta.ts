export default class RespostaModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada: boolean = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true);
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false);
    }

    get valor() {
        return this.#valor;
    }

    get certa() {
        return this.#certa;
    }

    get revelada() {
        return this.#revelada;
    }

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true);
    }

    /**
     * 
     * @returns 
     * Método de instancia é diferente de método estático.
     * Os métodos estáticos podemos chamadas diretamente na classe. Sem a necessidade de criar um instancia. 
     * 
     * Exemplo: 
     * Método instancia 
     * const resp = new RespostaModel(...)
     * resp.metodoDeInstancia()
     * 
     * Método estático
     * RespostaModel.metodoEstatico()
     */

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada);
    }

    paraObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        }
    }
}