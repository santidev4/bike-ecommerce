import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.sessionID
  const user = await prisma.user.findFirst({
    where: { sessionId }
  })

  if (user?.role === 'admin') next()
  else res.status(401).send('unauthorized')
}

module.exports = {
  isAdmin
}
