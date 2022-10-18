import express from 'express'
import { userController } from '../controllers/user-controller'

const userRouter = express.Router()

userRouter.get("/", userController.createUser, (req, res) => {
    res.send(`Hola Mundo`)
})

userRouter.post('/post', (req,res) => {
    console.log(req.body)
    res.status(200).send('OK: Todo esta bien')
})

export default userRouter