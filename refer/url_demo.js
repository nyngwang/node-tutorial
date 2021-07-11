// import url from "url"

const myURL = new URL("http://ningwang-line-fresh.tw:8000?id=100&status=active")

console.log(myURL.href)
console.log(myURL.toString())
console.log(myURL.host)
console.log(myURL.hostname) // 不包含port
console.log(myURL.search)
// console.log(myURL.searchParams)
myURL.searchParams.forEach((value, key) => {
  console.log(key, value)
})

