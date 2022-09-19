/* eslint-disable no-unused-expressions */
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
// username, password, firstName, lastName, email, document, avatar

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = await prisma.user.create({
      data: {
        username,
        password: passwordHash,
        email
      }
    })
    res.send(user)
  } catch (error) {
    console.error(error)
  }
}

const loginUser = async (req: Request, res: Response) => {
  try {
    const body = req.body

    const user = await prisma.user.findFirst({
      where: { username: body.username }
    })
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.password)

    if (!(user && passwordCorrect)) return res.status(401).json({ error: 'invalid username or password' })

    const userForToken = {
      username: user.username,
      id: user.id
    }

    // TODO agregar property isAdmin a req.session. Se cambia en node_modules-types-express-session
    // TODO metodos para autorizar admin: jwt, coockie session guardando id del user, encryptar jwt con bcrypt
    req.session.userId = user.id

    // TODO guardar role en cache para optimizar

    const token = jwt.sign(userForToken, process.env.SECRET!, { expiresIn: '3d' })
    res.status(200).send({
      token,
      username: user.username,
      admin: user.role === 'admin' // Para saber si el user es un admin
    })
  } catch (error) {
  }
}

module.exports = {
  createUser,
  loginUser
}
