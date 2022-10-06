// const { server } = require('./server/app')
import { server } from './src/app'

server.listen(process.env.PORT, () => {
  console.log(`listening at ${process.env.PORT}`)
})
