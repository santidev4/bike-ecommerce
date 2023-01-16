/* eslint-disable camelcase */
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
        categories: {
          connect: [{
            id: 4
          }]
        }
      },
      include: {
        categories: true
      }
    })
    res.send(product)
  } catch (error) {
    console.log('error', error)
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    await prisma.product.delete({
      where: {
        id
      }
    })
  } catch (error) {
    console.error(error)
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

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
    const category = await prisma.category.delete({
      where: {
        name
      }
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

const getBrands = async (req: Request, res: Response) => {
  try {
    const allBrands = await prisma.brand.findMany()
    res.send(allBrands)
  } catch (error) {
    console.error(error)
  }
}

const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const brand = await prisma.brand.delete({
      where: {
        id
      }
    })
    res.send(brand)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getDbProducts,
  postProduct,
  deleteProduct,
  postCategory,
  getCategories,
  deleteCategory,
  postBrand,
  getBrands,
  deleteBrand
}
