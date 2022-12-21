const { consertos } = require("./consertos");


let aparelho = "Iphone37";

console.log(typeof aparelho);

if (typeof aparelho == "string"){
    console.log("Eu sou uma String");
}

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

    console.log(typeof itensConsertados);
    
    if (typeof itensConsertados == ['Array']){
        console.log(["Eu sou uma Array"]);
    }

    let valores = [
        2500,
        750,
        80,
        150,
        100,
        70,
        800,
        420,
        80,
        90,
        70,
        20,
        30
    ];

    console.log(typeof valores);
    
    if (typeof valores == ['Array']){
        console.log(["Eu sou uma Array"]);
    }
    
    let pronto  = true;

    console.log(typeof true);
    
    if (typeof pronto == true){
        console.log(true);
    }