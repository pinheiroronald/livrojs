const frm = window.document.querySelector('form')
const resp = window.document.querySelector("h3")

frm.addEventListener("submit",(r)=>{
    r.preventDefault()

const num = Number(frm.inNum.value)
if(num % 2 ==0){
    resp.innerText=`O número ${num} é Par`
    resp.style.color='blue'
}else{
    resp.innerText=`O número ${num} é Ímpa`
    resp.style.color = 'red'
}
})