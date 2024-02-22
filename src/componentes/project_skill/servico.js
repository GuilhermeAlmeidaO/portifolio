import axios from "axios";

const reposApi = axios.create({baseURL: "https://api.github.com/users/GuilhermeAlmeidaO/repos"})

async function getRepos(){
    const response = await reposApi.get('')

    return response.data
}

export {
    getRepos,
}