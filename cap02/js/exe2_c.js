const frm = window.document.querySelector("form")
const resp1 = window.document.querySelector("h3#resp1")
const resp2 = window.document.querySelector("h3#resp2")

frm.addEventListener("submit",(e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco / 2
    const pagar = (preco * 2) + promocao

    resp1.innerText=`${produto} - Promoção: Leve 3 por R$:${pagar.toFixed(2)} `
    resp2.innerText=`O 3º produto custa apenas R$:${promocao.toFixed(2)}`

  e.preventDefault()
})