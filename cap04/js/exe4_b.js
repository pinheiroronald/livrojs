const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("Submit",(e)=>{
    e.preventDefault()
    const velPer = Number(frm.inVelPermit.value)
    const velCon = Number(frm.inVelCondu.value)

     if(velCon <= velPer){
       resp.innerText="Situação: Sem Multa." 
     }else{
        const maisVinte = velPer * 1.2
        if(velCon <= maisVinte){
          resp.innerText="Situação: Multa leve."
        }else{
          resp.innerText="Situação: Multa Pessada"
        }
     }
})