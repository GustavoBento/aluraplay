const endPointDaAPI = "http://localhost:3000/videos"

async function listaDeVideos() {
    const conexao = await fetch(endPointDaAPI)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaDeVideos
}