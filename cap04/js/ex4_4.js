const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const horaBrasil =Number(frm.inHoraBrasil.value)
    let horaFrnca = horaBrasil +5
    if(horaFrnca>24)
    horaFrnca = horaFrnca - 24

    resp.innerText=`Hora na França ${horaFrnca.toFixed(2)}`
})