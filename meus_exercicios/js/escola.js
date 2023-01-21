const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")


frm.addEventListener("submit",(a)=>{
    const nome = frm.inNome.value
    const fone = frm.inFone.value


    resp.innerText=`Nome: ${nome}\n Telefone:${fone}`
    a.preventDefault()
})