import { RequestHandler } from 'express'

type Controller = RequestHandler<{}, any, any, any, Record<string, any>>

export const getUser: Controller = (req, res) => {
    console.log(req.query)
    res.send(`Hola Mundo`)
}

const createUser: Controller = (req, res) => {
    console.log(req.body)
    res.send(`Hola Mundo`)
}