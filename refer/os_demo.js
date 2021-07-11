import os from "os"

console.log(`platform info ${os.platform()}`)
console.log(`architecture: ${os.arch()}`)

console.log(os.cpus()[0])
console.log(os.totalmem()/(1024*1024))
console.log(os.homedir())
console.log(os.uptime()/(3600*24))
