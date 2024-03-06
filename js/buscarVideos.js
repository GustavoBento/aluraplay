import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js"
const botao = document.querySelector("[data-botao]")

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("#pesquisar").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    const lista = document.querySelector(".videos__container")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    
}

botao.addEventListener("click", evento => buscarVideo(evento))