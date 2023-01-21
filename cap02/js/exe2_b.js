const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(a)=>{
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

     const pagar = Math.ceil((tempo / 15)* valor)
     resp.innerText=`${pagar}`
   a.preventDefault()
})