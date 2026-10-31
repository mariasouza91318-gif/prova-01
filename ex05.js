//Bônus de vendas
const prompt = require('prompt-sync')();

let vendas = Number(prompt("Digite suas vendas: "));
let meta = Number(prompt("Digite sua meta: "));

if (vendas >= meta) {
    console.log("meta atingida, ganhou bonus! ");
} else {
    console.log("meta não atingida, sem bonus ");
        

}
