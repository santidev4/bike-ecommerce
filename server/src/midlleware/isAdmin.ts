import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.session.userId
  const user = await prisma.user.findUnique({ where: { id: userId } })

  if (user?.role === 'admin') next()
  else res.status(401).send('unauthorized')
}

module.exports = {
  isAdmin
}
