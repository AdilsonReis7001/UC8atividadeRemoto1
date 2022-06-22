let listaQuantPecas = 9;

let pesoPeca = 10;
let nomePecas = "eixo";

if (pesoPeca >= 100) {
    console.log("Cadastro da peça permitido!");
} else {
    console.log("Cadastro de peça não permitido: Peso Insuficiente!");
}
if (listaQuantPecas >= 10) {
    console.log("Atenção: Quantidade de peças acima da capacidade da caixa!");    
} else {
    console.log("Quantidade de peças dentro da capacidade da caixa!");
}
if (nomePecas.length < 3) {
    console.log("Atenção: Nome inválido para cadastro!");
} else {
    console.log("Nome válido para cadastro.");
}