const frm = window.document.querySelector("form")
const resp1 = window.document.querySelector("h3#res1")
const resp2 = window.document.querySelector("h3#res2")

frm.addEventListener("submit",(e)=>{

    const remedio = frm.inMedicamento.value
    const preco = Number(Math.floor(frm.inPreco.value))
    
    promocao = preco * 2

    resp1.innerText=`Promoção de ${remedio}`
    resp2.innerText=`Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()
})