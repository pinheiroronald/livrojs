//Cria referênia ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um "ouvinte" de evento, acionando quando o butão submit for clicado

frm.addEventListener("submit",(e)=>{
    const titulo = frm.inTitulo.value //obtém conteúdo dos cacmpos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  //Arendonda para baixo o resultado
    const minutos = duracao % 60           //Obtem o resto da divisao

    resp1.innerText = titulo //Exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

 e.preventDefault()
}) 