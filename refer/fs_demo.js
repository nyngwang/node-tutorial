import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dir_new = path.join(__dirname, "new_dir")
const content_to_write = "Hello World!"
const dist = path.join(dir_new, 'hello.txt')




fs.mkdir(dir_new, {})
  .then(err => {
    if (err) console.log(`An error occurred: ${err}`)
    else console.log("Dir will be created.")
  })
  .then(() => {
    const dist = path.join(dir_new, 'hello.txt')
    return fs.writeFile(dist, content_to_write)
  })
  .then(err => {
    if (err) console.log(`An error occurred: ${err}`)
    else console.log(`Content "${content_to_write}" has been written to `)
  })
  .then(() => {
    console.log("File created and written, read from file")
    return fs.readFile(dist, "utf8")
  })
  .then((err, data)=> {
    if (err) console.log(`An error occurred: ${err}`)
    else console.log(`Content: ${data}`)
  })


