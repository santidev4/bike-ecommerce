import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const permit = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.isAdmin) return next()
  else return res.sendStatus(401)
}

const postProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const product = await prisma.product.create({
      data: body
    })
    res.send(product)
  } catch (error) {
    console.log('error', error)
  }
}

const postCategory = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const category = await prisma.category.create({
      data: body
    })
    res.send(category)
  } catch (error) {
    console.error(error)
  }
}

const postBrand = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const newBrand = await prisma.brand.create({
      data: body
    })
    res.send(newBrand)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  postProduct,
  postCategory,
  postBrand,
  permit
}
