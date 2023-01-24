const prompt = require("prompt-sync")()//Adicionaa o pacote prompt-sync

const pessoa = Number(prompt("Nº  Pessoa: "))
const peixe = Number(prompt("Nº Peixe"))

let pagar

if(peixe<= pessoa){
    pagar = pessoa * 20
}else{
    pagar = (pessoa * 20) + ((peixe - pessoa)* 12)
}
console.log(`Pagar R$ ${pagar.toFixed(2)}`)