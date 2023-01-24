const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    if(Number.isInteger(raiz)){
        resp.innerText=`Raiz: ${raiz}`
    }else{
        resp.innerText=`Não há Raiz Exata Para ${numero}`
       
    }
})