import { Request, Response, NextFunction } from 'express'
import { prisma } from '../app'

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.session.userId

  try {
    const user = await prisma.user.findFirst({
      where: { sessionId }
    })

    if (user?.role === 'admin') next()
    else res.status(401).send('unauthorized')
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  isAdmin
}
