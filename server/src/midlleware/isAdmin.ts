import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.session.id
  const user = await prisma.user.findFirst({
    where: { sessionId }
  })
  const test = await prisma.session.findFirst({ where: { id: sessionId } })

  console.log('test', test)
  console.log('user', user)
  console.log('sessionId', sessionId)

  if (user?.role === 'admin') next()
  else res.status(401).send('unauthorized')
}

module.exports = {
  isAdmin
}
