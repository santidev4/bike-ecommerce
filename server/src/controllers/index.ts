import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const getDbProducts = async (req: Request, res: Response) => {
  try {
    const users = await prisma.product.findMany()
    res.send(users)
  } catch (error) {
    console.error(error)
  }
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

const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany()
    res.send(categories)
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

const getBrands = async (req: Request, res: Response) => {
  try {
    const allBrands = await prisma.brand.findMany()
    res.send(allBrands)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getDbProducts,
  postProduct,
  postCategory,
  getCategories,
  postBrand,
  getBrands
}
