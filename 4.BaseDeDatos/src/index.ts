import axios from 'axios'

const main = async () => {
    const result = await axios.get('http://localhost:3000/user/')
    console.log('>>>>>>', result.data)
}

main()