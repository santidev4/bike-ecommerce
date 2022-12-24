import supertest from 'supertest'
import { server, prisma } from '../src/app'

const app = supertest(server)

const loginData = {
  username: 'fermin1',
  password: 'mama1234'
}
const userData = {
  username: 'test',
  email: 'john@test.com',
  password: 'mama1234'
}

const category = {
  name: 'bikes'
}

beforeAll(async () => {
  await app.post('/login')
    .withCredentials(true)
    .send(loginData)
    .expect(200)
})

describe('user account auth', () => {
  // it('should create a new account', async () => {
  //   await app.post('/register')
  //     .withCredentials(true)
  //     .send(userData)
  //     .expect(200)
  // })

})

describe('admin funtionality', () => {
  it('should create a new category', async () => {
    await app.post('/categories')
      .withCredentials(true)
      .send(category)
      .expect(200)
  })
})

afterAll(async () => {
  const user = await prisma.user.findFirst({
    where: {
      username: userData.username
    }
  })
  if (user) {
    await prisma.user.delete({
      where: {
        username: userData.username
      }
    })
  }
})
