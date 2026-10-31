//Metas atingida 02

const prompt = require('prompt-sync')();

let vendas = Number(prompt("Digite suas vendas: "));
let meta = Number(prompt("Digite sua meta: "));

if (vendas >= meta) {
    console.log(" meta atingida ");
} else {
    console.log(" meta não atingida ");

}