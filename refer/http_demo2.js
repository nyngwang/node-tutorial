import http from "http"
import {fileURLToPath} from "url"
import path from "path"
import fs from "fs/promises"
const __filename = fileURLToPath(import.meta.url)
console.log("filename:", __filename)
// const __dirname = path.dirname(__filename)
const DIST = path.join(__filename, "../",  "../", "public")
// const eq = path.join(__filename, "../", "../", "public") ===
//   path.join(__dirname, "../", "public")
// console.log("eq:", eq)
console.log("DIST:", DIST)



const server = http.createServer((req, res) => {
  let filePath = path.join(DIST,
    req.url === "/"? "index.html": req.url
  )

  let contentType = ""
  let extname = path.extname(filePath)
  if (!extname) filePath += ".html"

  switch(extname) {
    case ".js":
      contentType = "text/javascript"
      break
    case ".css":
      contentType = "text/css"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".png":
      contentType = "image/png"
      break
    case ".jpg":
      contentType = "image/jpg"
      break
    default:
      contentType = "text/html"
  }

  fs.readFile(filePath)
    .then(content => {
      res.writeHead(200, {
        "Content-Type": contentType
      })
      res.end(content, "utf8")
      console.log("SUCCESS")
    })
    .catch(err => {
      if (err.code === "ENOENT") {
        // 404 not found.
        fs.readFile(path.join(DIST, "404.html"))
          .then((content, err) => {
            res.writeHead(200, {
              "Content-Type": "text/html"
            })
            res.end(content, "utf8")
          })
      } else {
        // some server error.
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
      }
    })


  // console.log(req.url)
  // if (req.url === "/") {
  //   fs.readFile(path.join(DIST, "index.html"))
  //     .then((content, err) => {
  //       if (err) {
  //         console.log(err)
  //         return
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html"
  //       })
  //       res.end(content)
  //     })
  // }

  // if (req.url === "/about") {
  //   fs.readFile(path.join(DIST, "about.html"))
  //     .then((content, err) => {
  //       if (err) {
  //         console.log(err)
  //         return
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html"
  //       })
  //       res.end(content)
  //     })
  // }

  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Ning Wang", age: 26 },
  //     { name: "Johnny Pan", age: 24 },
  //     { name: "Tim", age: 27 }
  //   ]

  //   res.writeHead(200, {
  //     "Content-Type": "application/json"
  //   })

  //   res.end(JSON.stringify(users))
  // }
})

const PORT = process.env.PORT || 5000


server.listen(PORT, () => console.log(`Server running on PORT ${PORT}....`))
