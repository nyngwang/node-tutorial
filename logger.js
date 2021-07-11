const EventEmitter = require('events')
// when emit is called, all listener called sync.ly.
// console.log(__filename)
// console.log(__dirname)

class Logger extends EventEmitter {

  log(message) {
    console.log(message)
    this.emit('messageLogged', {
      id: 1,
      url: 'http://google.com'
    })
  }
}



module.exports = Logger
