const server = require('./src/app')

server.listen(process.env.PORT, ()=> {
    console.log(`listening at ${process.env.PORT}`)
})