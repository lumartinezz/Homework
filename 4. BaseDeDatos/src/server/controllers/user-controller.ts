import { RequestHandler } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type userController = RequestHandler<{}, any, any, any, Record<string, any>>

export const getUser: userController = async (req, res) => {
    console.log(req.query)

    const user = await prisma.user.findUnique({
        where: {
            email: req.query.email
        }
    })

    res.json(user)
}

export const createUser: userController = async (req, res) => {
    console.log(req.body)

    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email
        }
    })



    res.json(user)
}