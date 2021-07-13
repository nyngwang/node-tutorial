import http from "http"
import fs from "fs/promises"
import path from "path"
import {fileURLToPath} from "url"
const __filename = fileURLToPath(import.meta.url)
const PROJ_ROOT = path.join(path.dirname(__filename), "../")
const PUBLIC = path.join(PROJ_ROOT, "public")

const server = http.createServer((req, res) => {

  var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
  };

  if (req.method !== "GET") {
    res.statusCode = 501
    res.setHeader("Content-Type", "text/plain")
    return res.end("Method not implemented")
  }

  const reqpath = req.url.toString().split("?")[0]
  console.log("reqpath =", reqpath)

  if (req.url === "/") {
    fs.readFile(path.join(PUBLIC, "index.html"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end(content)
      })
  }

  if (req.url === "/about") {
    fs.readFile(path.join(PUBLIC, "about.html"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/html"
        })
        res.end(content)
      })
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "Ning Wang", age: 26 },
      { name: "Johnny Pan", age: 24 },
      { name: "Tim", age: 27 }
    ]

    res.writeHead(200, {
      "Content-Type": "application/json"
    })

    res.end(JSON.stringify(users))
  }

  if (req.url === "/css/style.css") {
    fs.readFile(path.join(PUBLIC, "/css/style.css"))
      .then((content, err) => {
        if (err) {
          console.log(err)
          return
        }
        res.writeHead(200, {
          "Content-Type": "text/css"
        })
        res.end(content)
      })
  }
})

const PORT = process.env.PORT || 5000


server.listen(PORT, () => console.log(`Server running on PORT ${PORT}....`))
