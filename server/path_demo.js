/**
 *
 *  練習處理 URL.
 *
 **/
import path from "path"
import { fileURLToPath } from "url"


const filePath = fileURLToPath(import.meta.url)
console.log(`file path = ${filePath}`)
console.log(`basename = ${path.basename(filePath)}.`)
console.log(`dirname = ${path.dirname(filePath)}`)
console.log(`extension = ${path.extname(filePath)}`)
console.log(`path.parse = `, path.parse(filePath))

console.log(`Now testing path.join, with 'secret' and 'first.src':`,
    path.join(path.dirname(filePath), 'secret', 'first.src'))
