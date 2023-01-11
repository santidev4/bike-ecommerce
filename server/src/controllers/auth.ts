
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
    console.log('req.sessionID en login', req.sessionID)

    // const userForToken = {
    //   username: user.username,
    //   id: user.id
    // }
    req.session.save()
    res.header('Content-Type', 'application/json')
    console.log('userId', req.session.userId)
    console.log('session', req.session)
    console.log('user', user)
    // if (passwordCorrect) {
    //   await prisma.user.update({
    //     where: {
    //       id: user.id
    //     },
    //     data: {
    //       sessionId: req.sessionID
    //     }
    //   })
    // }

    // TODO agregar property isAdmin a req.session. Se cambia en node_modules-types-express-session
    // TODO metodos para autorizar admin: jwt, coockie session guardando id del user, encryptar jwt con bcrypt

    // TODO guardar role en cache para optimizar

    // const token = jwt.sign(userForToken, process.env.SECRET!, { expiresIn: '3d' })
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
  console.log('req.session', req.session)
  const id: string = req.params.id

  const userData = await prisma.user.findFirst({
    where: {
      sessionId: id
    },
    select: {
      id: true,
      username: true,
      lastName: true,
      firstName: true,
      avatar: true,
      role: true,
      document: true,
      email: true
    }
  })
  console.log('auth-controller', userData)
  res.send(userData)
}

const logout = async (req: Request, res: Response) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    })
  } else {
    res.end()
  }
}

module.exports = {
  createUser,
  loginUser,
  getUser,
  logout
}
