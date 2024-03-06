const endPointDaAPI = "http://localhost:3000/videos"

async function listaDeVideos() {
    const conexao = await fetch(endPointDaAPI)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo (titulo, descricao, url, imagem) {
    const conexao = await fetch(endPointDaAPI, {
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
}

export const conectaApi = {
    listaDeVideos,
    criaVideo
}