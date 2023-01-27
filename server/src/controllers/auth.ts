
/* eslint-disable no-undef */
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../db'

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // const sessionId = req.session.id

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

    req.session.save()
    res.header('Content-Type', 'application/json')

    if (passwordCorrect) {
      // TODO poner try catch
      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          sessionId: req.sessionID
        }
      })
    }
    // TODO guardar role en cache para optimizar

    res.send(req.session)
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (req: Request, res: Response) => {
  console.log('req.session', req.sessionID)
  console.log('req.session', req.session)
  const id: string = req.params.id

  const userData = await prisma.user.findFirst({
    where: {
      session: {
        id
      }
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

  const sessionTest = await prisma.session.findUnique({
    where: {
      sid: id
    },
    select: {
      user: true
    }
  })
  console.log('id', id)
  console.log('sessionTest', sessionTest)
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
