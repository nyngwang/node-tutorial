import path from "path"
import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url)
console.log(`basename of __filename is ${path.basename(__filename)}.`)
console.log(`dirname of __filename is ${path.dirname(__filename)}`)
console.log(`extension of __filename is ${path.extname(__filename)}`)
console.log(`After path.parse we got`, path.parse(__filename))

console.log(`Now testing path.join, with 'secret' and 'first.src':`,
    path.join(path.dirname(__filename), 'secret', 'first.src'))
