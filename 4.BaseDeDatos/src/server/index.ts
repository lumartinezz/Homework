import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'

import userRouter from './routes/user-routes'


const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log('Holis nodemon', PORT)
})