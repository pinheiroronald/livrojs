//Cria uma referência ao foem e ao elemento h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, quando o botão submit for clicado

frm.addEventListener("submit",(e) => {
    
    const quilo = Number(frm.inQuilo.value)//obtém conteúdo dos campos
    const consumo =Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // Calcula o valor a ser pago
    resp.innerText = `valor a pagar R$: ${valor.toFixed(2)}`//Exibe a resposta
    
    e.preventDefault()  // evita o envio do formulário
})