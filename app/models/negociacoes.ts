import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    /*
        outra forma de declarar um array de negociacao é usar Negocicacao[]
    */ 

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }

    /*
        Outra forma de declarar a função de array readyonly é:
        lista(): readyonly Negociacao[] {
    */ 
}