import supertest from 'supertest'
import { server } from '../src/app'
import { login, createNewAccount, deleteNewUser, createNewCategory, deleteNewcategory } from './helpers/account.helpers'

const app = supertest(server)

const loginData = {
  username: 'test',
  password: 'john@mama1234'
}
const newUserData = {
  username: 'test',
  email: 'john@test.com',
  password: 'mama1234'
}

const newCategory = {
  name: 'testing'
}

beforeAll(async () => {
  deleteNewUser(newUserData)
  login(loginData)
})

describe('user account auth', () => {
  it('should create a new account', async () => {
    createNewAccount(newUserData)
  })
})

describe('admin funtionality', () => {
  it('should create a new category', async () => {
    createNewCategory(newCategory)
  })
  it('should delete category recently created', async () => {
    await app.delete('/categories')
      .withCredentials(true)
      .send()
  })
})

afterAll(async () => {
  deleteNewcategory(newCategory)
})
