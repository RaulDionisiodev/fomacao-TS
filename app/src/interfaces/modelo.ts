import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}
/*
    Uma classe só pode estender uma outra classe, não existe herança múltipla em TypeScript.
    Mas uma interface pode estender quantas outras interfaces ela quiser na aplicação.

*/