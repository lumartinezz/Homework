const $ = (selector) => document.querySelector(selector);
const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = `${baseUrl}/character?page=1`;
const locationsUrl = `${baseUrl}/locations?page=1`;
const episodeUrl = `${baseUrl}/episode?page=1`;
const $h1 = $("#h1")
const $img = $("#img")

    const response = axios.get(charactersUrl)
    const responseHtml = response.then((response) => {
        $("h1").innerText = `${response.data.results[0].name}`
        $("img").src = `${response.data.results[0].image}`
        document.getElementById('contenedor').innerHTML = body
    })