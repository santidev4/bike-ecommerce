import express, { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import expressSession from 'express-session'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { prisma } from '../db'
import passport from 'passport'
// import GoogleStrategy from 'passport-google-oauth20'

const routes = require('./routes/index')
const authRouter = require('./routes/auth')
const server = express()
// const prisma = new PrismaClient()

dotenv.config()

interface ErrorStatus extends ErrorRequestHandler {
    status: number
    message: string
}
// Session
server.use(
  expressSession({
    cookie: {
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: process.env.SECRET!,
    // exclamation tells TypeScript that even though something looks like it could be null, it can trust you that it's not
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(
      prisma,
      {
        checkPeriod: 2 * 60 * 1000, // ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined
      }
    )
  })
)

server.use(express.json())
server.use(cookieParser())
server.use(morgan('dev'))
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
  next()
})

server.use('/', routes)
server.use('/', authRouter)

// passport.use(new GoogleStrategy.Strategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3001/oauth2/redirect/google'
// },
// async (accessToken: any, refreshToken: any, profile: any, done: (arg0: any, arg1: any) => void) => {
//   const user = await prisma.user.findFirst({
//     where: {
//       username: profile.emails[0].value,
//       email: profile.emails[0].value,
//       password: profile.passport.user.id
//     }
//   })

//   if (!user) {
//     const newUser = await prisma.user.create({
//       data: {
//         username: profile.emails[0].value,
//         email: profile.emails[0].value,
//         password: profile.passport.user.id
//       }
//     })
//     done(null, newUser)
//   } else done(null, user)
// }
// ))

passport.serializeUser((user, done) => done(null, user))

// Error catching endware.
server.use((err: ErrorStatus, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

// module.exports = { server, prisma }
export { server, prisma }
