import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController;
const form  = document.querySelector('.form')

const botaoImporta = document.querySelector("#botao-importa")

if (form) {
    form.addEventListener('submit', (evento : Event) => {
        evento.preventDefault();
        controller.adiciona();
    })
}else {
    throw new Error("Não foi possível inicializar a aplicação");
    
}

if (botaoImporta) {
    botaoImporta.addEventListener("click", () => {
        controller.importaDados()
    })
} else {
    throw new Error("Botão 'Importa' não foi encontrado");
}
