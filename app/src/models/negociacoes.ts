import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    /*
        outra forma de declarar um array de negociacao é usar Negocicacao[]
    */ 

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }

    /*
        Outra forma de declarar a função de array readyonly é:
        lista(): readyonly Negociacao[] {
    */ 
}