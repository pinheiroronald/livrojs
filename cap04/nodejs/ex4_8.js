const prompt = require("prompt-sync")()
const valor =Number(prompt("Valor da compra R$: "))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const ValorPercela = valor / parcelas 
console.log(`pode pagar em ${parcelas}X de R$: ${ValorPercela.toFixed(2)}`)