axios.get('https://rickandmortyapi.com/api')
    .then(() => {
        console.log('Funciona, mas vale pa')
    })
    .catch((error) => {
        console.log(error)
    })