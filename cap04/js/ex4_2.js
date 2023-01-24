const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    
    const nome = frm.inNome.value
    const masculino = frm.inMas.checked
    const altura = Number(frm.inAltura.value)
    let peso

    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }else{
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText=`${nome}: Seu pesso Ideal é ${peso.toFixed(3)} kg`
    e.preventDefault()
})
frm.addEventListener("reset",(e)=>{
    resp.innerText=""
    e.preventDefault()
})