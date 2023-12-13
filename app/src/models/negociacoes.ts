import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
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

    public paraTexto() : string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}