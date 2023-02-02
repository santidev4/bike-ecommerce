/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { prisma } from '../../db'
import { brandIdToId, categoriesToId } from './helpers/controllers.helpers'

export const getDbProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: { categories: true }
    })
    res.send(products)
  } catch (error) {
    console.error(error)
  }
}

export const postProduct = async (req: Request, res: Response) => {
  try {
    const { categories, brand_id, ...body } = req.body

    const newBrandId = brandIdToId(brand_id)
    const newCategories = categoriesToId(categories)
    const product = await prisma.product.create({
      data: {
        ...body,
        categories: {
          connect: newCategories.map((e: {id: number}) => {
            return { id: e.id }
          })
        },
        brand_id: newBrandId
      }
    })
    res.send(product)
  } catch (error) {
    console.log('error', error)
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id, data } = req.body
    const updatedProduct = await prisma.product.update({
      where: {
        id
      },
      data
    })
    res.send(updatedProduct)
  } catch (error) {
    console.error(error)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
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

export const postCategory = async (req: Request, res: Response) => {
  try {
    let body = req.body
    if (body?.parent_id) {
      const parent_id = brandIdToId(body?.parent_id)
      body = { ...body, parent_id }
    }
    const category = await prisma.category.create({
      data: body
    })
    res.send(category)
  } catch (error) {
    console.error(error)
  }
}

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany()
    res.send(categories)
  } catch (error) {
    console.error(error)
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
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

export const postBrand = async (req: Request, res: Response) => {
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

export const getBrands = async (req: Request, res: Response) => {
  try {
    const allBrands = await prisma.brand.findMany()
    res.send(allBrands)
  } catch (error) {
    console.error(error)
  }
}

export const deleteBrand = async (req: Request, res: Response) => {
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

export const getWheelSize = async (req: Request, res: Response) => {
  try {
    const sizes = await prisma.wheel_Size.findMany()
    res.send(sizes)
  } catch (error) {
    console.error(error)
  }
}

export const createWheelSize = async (req: Request, res: Response) => {
  try {
    const size = req.body
    const wheelSize = await prisma.wheel_Size.create({
      data: size
    })
    res.send(wheelSize)
  } catch (error) {
    console.error(error)
  }
}

export const deleteWheelSize = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const deletedWheelSize = await prisma.wheel_Size.delete({
      where: {
        id
      }
    })
    res.send(deletedWheelSize)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getDbProducts,
  postProduct,
  deleteProduct,
  updateProduct,
  postCategory,
  getCategories,
  deleteCategory,
  postBrand,
  getBrands,
  deleteBrand,
  getWheelSize,
  createWheelSize,
  deleteWheelSize
}
