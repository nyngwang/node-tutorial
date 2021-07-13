import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dir_new = path.join(__dirname, "new_dir2")
const dist = path.join(dir_new, 'hello.txt')
const content_to_write = "Hello World!"
const option = {}

fs.mkdir(dir_new, option)
  .then(() => console.log("Dir has been created."))
  .then(() => fs.writeFile(dist, content_to_write))
  .then(() => console.log(`Content has been written: "${content_to_write}"`))
  .then(() => fs.readFile(dist, "utf8"))
  .then(data => console.log(`Content read from file: ${data}`))
  .catch(err => console.log(err))


