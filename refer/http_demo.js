import http from "http"


const PORT = 5000

http.createServer((req, res) => {

  res.write("Hello World")
  res.end()


}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`)
})
