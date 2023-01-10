import { Router } from 'express'
import passport from 'passport'
const { createUser, loginUser, getUser, logout } = require('../controllers/auth')

const authRouter = Router()

authRouter.post('/register', createUser)
authRouter.post('/login', loginUser)
authRouter.get('/login/google', passport.authenticate('google', { scope: ['email', 'profile'] }))
authRouter.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/products',
  failureFlash: '/authFailure'
}))
authRouter.get('/profile/:id', getUser)
authRouter.delete('/logout', logout)

module.exports = authRouter
