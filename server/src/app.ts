import express, { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
// import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import expressSession from 'express-session'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { prisma } from '../db'
import cors from 'cors'
// import passport from 'passport'
// import GoogleStrategy from 'passport-google-oauth20'

const routes = require('./routes/index')
const authRouter = require('./routes/auth')
const server = express()
interface ErrorStatus extends ErrorRequestHandler {
    status: number
    message: string
}

dotenv.config()
server.set('trust proxy', 1)
server.use(cors({
  origin: process.env.ORIGIN,
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}))

// Session
server.use(
  expressSession({
    name: 'manija',
    cookie: {
      path: '/',
      secure: false,
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: process.env.SECRET!,
    // exclamation tells TypeScript that even though something looks like it could be null, it can trust you that it's not
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      // @ts-ignore
      prisma,
      {
        checkPeriod: 2 * 60 * 1000, // ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined
        // logger: console,
        // loggerLevel: 'log'

      }
    )
  })
)

// server.use(cookieParser())
server.use(morgan('dev'))
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN) // 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
  next()
})
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/', routes)
server.use('/', authRouter)

// Error catching endware.
server.use((err: ErrorStatus, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

// module.exports = { server, prisma }
export { server, prisma }
