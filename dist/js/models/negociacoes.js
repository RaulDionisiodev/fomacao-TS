export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /*
            Outra forma de declarar a função de array readyonly é:
            lista(): readyonly Negociacao[] {
        */
    }
    /*
        outra forma de declarar um array de negociacao é usar Negocicacao[]
    */
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
