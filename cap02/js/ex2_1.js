//Crie referência ao form e ao elemento h3(Onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um "ouvinte" de evento quando o butão submit for clicado

frm.addEventListener("submit",(e)=>{
    const nome = frm.inNome.value //obtem o nome digitada no formulário
    resp.innerText+=`Olá, ${nome}` //exibe a resposta do program
    e.preventDefault()            //Evita envio do formulário
})