const prompt =require("prompt-sync")()//Adiciona o pacote do programa
const veiculo = prompt("Veículo:")//Lê os dados de entrada 
const preco = Number(prompt("Preço R$:"))
const entrada = preco * 0.50//Calcula o valor da entrada
const parcelas = (preco * 0.50) / 12//...e das parcelas
console.log(`Promoção : ${veiculo}`)//Exibe reapostas 
console.log(`Entradda de R$: ${entrada.toFixed(2)}`)
console.log(`+12X de R$: ${parcelas.toFixed(2)}`)

