// import { session } from 'passport';
// import { session } from 'passport'
/* eslint-disable no-undef */
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../db'
// import { session } from 'passport'
// import jwt from 'jsonwebtoken'

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

    // const userForToken = {
    //   username: user.username,
    //   id: user.id
    // }
    await prisma.session.upsert({
      where: {
        id: req.sessionID
      },
      update: {
        userID: user.id
      }
    })
    // TODO agregar property isAdmin a req.session. Se cambia en node_modules-types-express-session
    // TODO metodos para autorizar admin: jwt, coockie session guardando id del user, encryptar jwt con bcrypt

    // TODO guardar role en cache para optimizar

    // const token = jwt.sign(userForToken, process.env.SECRET!, { expiresIn: '3d' })
    req.session.save((err) => console.log(err))
    res.header('Content-Type', 'application/json')
    console.log(req.session)
    res.send(req.session)

    // res.status(200).send({
    //   token,
    //   username: user.username,
    //   admin: user.role === 'admin' // Para saber si el user es un admin
    // })
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (req: Request, res: Response) => {
  console.log(req, 'user')
  const cookie: string = req.body.cookieParser

  const userData = await prisma.user.findFirst({
    where: {
      // Aca debe buscar por sessionID. De ahi lo paso a su perfil como un "detail"
      username: cookie
    }
  })

  res.send(userData)
}

module.exports = {
  createUser,
  loginUser,
  getUser
}
