import supertest from 'supertest'
import { server } from '../src/app'

const app = supertest(server)

const loginData = {
  username: 'test',
  password: 'john@mama1234'
}
// const userData = {
//   username: 'test',
//   email: 'john@test.com',
//   password: 'mama1234'
// }

const category = {
  name: 'bikes'
}

beforeAll(async () => {
  await app.post('/login')
    .withCredentials(true)
    .send(loginData)
})

// describe('user account auth', () => {
//   test('should create a new account', async () => {
//     const response = await app.post('/register')
//       .withCredentials(true)
//       .send(userData)
//     expect(response.status).toBe(200)
//   })
// })

describe('admin funtionality', () => {
  test('should create a new category', async () => {
    const response = await app.post('/categories')
      .withCredentials(true)
      .send(category)
    expect(response.status).toBe(200)
  })
})

// afterAll(async () => {
//   const user = await prisma.user.findFirst({
//     where: {
//       username: userData.username
//     }
//   })
//   if (user) {
//     await prisma.user.delete({
//       where: {
//         username: userData.username
//       }
//     })
//   }
// })
