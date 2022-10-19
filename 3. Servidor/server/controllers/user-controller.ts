import { RequestHandler } from 'express'

type userController = RequestHandler<{}, any, any, any, Record<string, any>>

export const getUser: userController = (req, res) => {
    console.log(req.query)
    res.send(`Hola Mundo`)
}

export const createUser: userController = (req, res) => {
    console.log(req.body)
    res.send(`Hola Mundo`)
}