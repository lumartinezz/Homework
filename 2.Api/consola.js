const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = `${baseUrl}/character?page=1`;
const locationsUrl = `${baseUrl}/location?page=1`;
const episodeUrl = `${baseUrl}/episode?page=1`;

const characters = async() => {
    try {
        const response = await axios.get(charactersUrl);
        console.log('>>>> Character', response.data);
    } catch (error) {
        console.log(error);
    }
}

const locations = async () => {
    try {
    const response = await axios.get(locationsUrl);
    console.log('>>>> Locations', response.data);
    } catch (error) {
    console.log(error);
    }
};

const episode = async () => {
    try {
    const response = await axios.get(episodeUrl);
    console.log('>>>> Episode', response.data);
    } catch (error) {
    console.log(error);
    }
};

characters()
locations();
episode();