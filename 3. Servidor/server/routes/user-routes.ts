import express from 'express'
import { createUser, getUser } from '../controllers/user-controller'

const userRouter = express.Router()

userRouter.get("/", getUser)

userRouter.post('/post', createUser)

export default userRouter