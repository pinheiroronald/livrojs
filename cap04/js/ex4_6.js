const frm = window.document.querySelector("form")
const resp1 = window.document.querySelector("#outRes1")
const resp2 = window.document.querySelector("#outRes2")
const resp3 = window.document.querySelector("#outRes3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
     const saque = Number(frm.inSaque.value)
     if(saque % 10 != 0){
        alert("Valor invaálido para notas Disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
     }
     const notaCem = Math.floor(saque / 100)
     let resto = saque % 100
     const notaCinquenta = Math.floor(saque / 50)
    resto = resto % 50
    const notaDez = Math.floor(100 / 10)  

    if(notaCem > 0){
        resp1.innerText =`Notas de R$ : 100 (Quntidade ${notaCem})`
    }
    if(notaCinquenta >0){
        resp2.innerText=`Notas de R$ 50 - Quantidade ${notaCinquenta}`
    }
    if(notaDez >0){
        resp3.innerText=`Notas de R$ 10 - Quantidade${notaDez}`
    }

})