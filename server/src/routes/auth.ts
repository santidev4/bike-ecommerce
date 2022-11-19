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

// {"cookie":{"originalMaxAge":604800000,"expires":"2022-10-13T10:40:13.899Z","httpOnly":true,"path":"/"},
//   "passport":{"user":{"id":"104449267537538300479","displayName":"Santiago Borquez",
//   "name":{"familyName":"Borquez","givenName":"Santiago"},
//   "emails":[{"value":"santiago.borquez.1705@gmail.com","verified":true}],
//   "photos":[{"value":"https://lh3.googleusercontent.com/a/ALm5wu0kdWquIHo_hG9KeIABBR8m7CjNmpKtUC-x2qCO=s96-c"}],
//   "provider":"google","_raw":"{\n  \"sub\": \"104449267537538300479\",\n  \"name\": \"Santiago Borquez\",\n
//   \"given_name\": \"Santiago\",\n  \"family_name\": \"Borquez\",\n  \"picture\": \"https://lh3.googleusercontent.com/a/ALm5wu0kdWquIHo_hG9KeIABBR8m7CjNmpKtUC-x2qCO\\u003ds96-c\",\n
//   \"email\": \"santiago.borquez.1705@gmail.com\",\n  \"email_verified\": true,\n  \"locale\": \"es\"\n}",
//   "_json":{"sub":"104449267537538300479","name":"Santiago Borquez","given_name":"Santiago","family_name":"Borquez",
//   "picture":"https://lh3.googleusercontent.com/a/ALm5wu0kdWquIHo_hG9KeIABBR8m7CjNmpKtUC-x2qCO=s96-c","email":"santiago.borquez.1705@gmail.com",
//   "email_verified":true,"locale":"es"}}}}
