import { prisma, server } from '../../src/app'
import supertest from 'supertest'

const app = supertest(server)

interface LoginDataType {
  username: string
  password: string
}
interface NewUserDataType extends LoginDataType {
  password: string
}

interface NewCategoryDataType {
  name: string
}

export const login = async (data: LoginDataType) => {
  await app.post('/login')
    .withCredentials(true)
    .send(data)
}

export const createNewAccount = async (data: NewUserDataType) => {
  const response = await app.post('/register')
    .withCredentials(true)
    .send(data)
  expect(response.status).toBe(200)
}

export const deleteNewUser = async (data: NewUserDataType) => {
  const newUser = await prisma?.user.findFirst({
    where: {
      username: data.username
    }
  })

  if (newUser) {
    await prisma.user.delete({
      where: {
        username: data.username
      }
    })
  }
}

export const createNewCategory = async (data: NewCategoryDataType) => {
  const response = await app.post('/categories')
    .withCredentials(true)
    .send(data)
  expect(response.status).toBe(200)
}

export const deleteNewcategory = async (data: NewCategoryDataType) => {
  await app.delete('/categories')
    .withCredentials(true)
    .send(data.name)
}

module.exports = {
  login,
  deleteNewUser,
  createNewCategory,
  deleteNewcategory
}
