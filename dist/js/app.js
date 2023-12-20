import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController;
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        controller.adiciona();
    });
}
else {
    throw new Error("Não foi possível inicializar a aplicação");
}
