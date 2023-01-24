const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (Centena): "))

if(numero < 100 || numero >= 1000){
    console.log("ERRO... deve ser uma centana")
}
