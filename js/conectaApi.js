const endPointDaAPI = "https://gustavobento.github.io/aluraplay/db.json"
console.log(endPointDaAPI)

async function listaDeVideos() {
    const conexao = await fetch(endPointDaAPI)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo (titulo, descricao, url, imagem) {
    const {conexao} = await fetch(endPointDaAPI, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações.`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possivel adicionar o video.")
    }
}


async function buscaVideo(termoDeBusca) {
    const {conexao} = await fetch(`https://gustavobento.github.io/aluraplay/db.json/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaDeVideos,
    criaVideo,
    buscaVideo
}