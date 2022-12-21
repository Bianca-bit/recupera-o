const { aparelhosProntos } = require("./listarAparelhos");

console.log(aparelhosProntos);



let aparelho = ['Iphone37'];

console.log("aparelho: ", aparelho);

let itensConsertados = [
    'Display',
    'bateria',
    'carregador',
    'Câmera Traseira',
    'Lente',
    'Botão Volume',
    'Botão Power',
    'Conector',
    'Airtag',
    'Película',
    'Teclado',
    'Fones',
    'Capa'];

console.log("itensConsertados: ", itensConsertados);

let somar = function (numA, numB) {
    console.log(numA + numB);
};

somar("Valor total: ", 3250);