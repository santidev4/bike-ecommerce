import { Request, Response } from 'express'
import { prisma } from '../../db'

const getDbProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: { categories: true }
    })
    res.send(products)
  } catch (error) {
    console.error(error)
  }
}

const postProduct = async (req: Request, res: Response) => {
  try {
    const { categories, ...body } = req.body
    const product = await prisma.product.create({
      data: {
        ...body,
        category: {
          connect: categories.map((e: { id: any }) => ({ id: e.id }))
        }
      },
      include: { categories: true }
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
