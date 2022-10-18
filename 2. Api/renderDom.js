const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = `${baseUrl}/character?page=1`;
const locationsUrl = `${baseUrl}/locations?page=1`;
const episodeUrl = `${baseUrl}/episode?page=1`;

const loadingCharacters = async() => {
    try {
        const response = await axios.get(charactersUrl);
        if(response.status === 200){
            let body = ``
            response.data.results.forEach(character => {
            body += `
                <div>
                    <h1> ${character.name} </h1>
                    <img src="${character.image}" alt="${character.name}">
                </div>
                `
            })
            document.getElementById('contenedor').innerHTML = body
            }
    } catch (error) {
        console.log(error);
    }
}

loadingCharacters()


// const locations = async () => {
//     try {
//     const response = await axios.get(locationsUrl);
//     console.log('>>>> response', response.data);
//     } catch (error) {
//     console.log(error);
//     }
// };

// const episode = async () => {
//     try {
//     const response = await axios.get(episodeUrl);
//     console.log('>>>> response', response.data);
//     } catch (error) {
//     console.log(error);
//     }
// };

// locations();
// episode();