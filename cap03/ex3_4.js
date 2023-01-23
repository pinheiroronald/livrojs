const prompt = require("prompt-sync")()
const pesokg = Number(prompt("Peso da ração (kg): "))
const consumo = Number(prompt("Consumo diário (gr): "))
const pesoGr = pesokg * 1000
const duracao = Math.floor(pesoGr/consumo)
const sobra = pesoGr % consumo
console.log(`Duração: ${duracao} dias`)
console.log(`sobra: ${sobra}gr`)