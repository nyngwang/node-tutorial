// const Logger = require('./logger')

// const path = require('path')
// console.log(path.parse(__filename))

// const os = require('os')
// console.log(`totalmem=${os.totalmem()} freemem=${os.freemem()}`)

// const fs = require('fs')
// const files = fs.readdirSync('./')
// console.log(files)
// fs.readdir('$', function(err, files) {
//   if (err) console.log(`Error ${err}`)
//   else {
//     console.log(files)
//   }
// })

// const emitter = new Logger()

// emitter.on('messageLogged', (arg) => {
//   console.log(`event with arg=${arg}`)
//   console.log(arg)
// })

// emitter.log('hello', {
//   id: 1,
//   message: "hello"
// })

const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Hello World!")
    res.end()
  }


  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]))
    res.end()
  }
})

server.listen(3000)

console.log('Listening on port 3000.')

















