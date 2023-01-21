const frm = document.querySelector("form")

frm.addEventListener("submit",(e)=>{
       const tabuada = Number(frm.inTabuada.value)
       res.innerText=''
       for(let i = 1; i< 11; i++){
        res.innerText+=`${tabuada} X ${i} = ${tabuada * i}\n`
       }
    e.preventDefault()
})