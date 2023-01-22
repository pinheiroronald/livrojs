const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(b)=>{
    const nume =Number(frm.inNum.value)
    if(nume % 2 === 0){
        resp.innerText = `${nume} é um número Par`
    }else{
        resp.innerText =`${nume} é um número Ímpa`
    }
    b.preventDefault()
})