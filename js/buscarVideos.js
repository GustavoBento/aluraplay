import { conectaApi } from "./conectaApi.js";
const botao = document.querySelector("[data-botao]")

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("#pesquisar").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    
    console.log(busca)
}

botao.addEventListener("click", evento => buscarVideo(evento))