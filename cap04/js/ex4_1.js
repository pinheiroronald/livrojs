const frm = window.document.querySelector("form")
const resp1 = window.document.querySelector("h3")
const resp2 = window.document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const not1 = Number(frm.inNota1.value)
    const not2 =Number(frm.inNota2.value)
    
    const media = (not1 + not2)/ 2

    if(media >= 7 && not1 >=7 && not2 >= 7){
        resp2.innerText=`Parabéns ${nome} você foi aprovado(a).`
        resp2.style.color ='blue'
    }else if(media >= 4){
        resp2.innerText= `Atenção ${nome} você esta em exame.`
        resp2.style.color='green'
    }else{
        resp2.innerText=`Ops!, ${nome} você foi reprovad(a)`
        resp2.style.color='red'
    }
    resp1.innerText=`Media das notas: ${media.toFixed(1)}`
    e.preventDefault()
})