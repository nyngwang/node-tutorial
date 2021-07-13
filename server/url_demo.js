/**
 *
 *  練習處理 URL.
 *
 **/

const myURL = new URL("http://yoursite.com:8000?id=100&status=active")

console.log("myURL.searchParams:", myURL.searchParams)
console.log("myURL.host:", myURL.host)
console.log("myURL.hostname:", myURL.hostname) // 不包含port
console.log("myURL.search:", myURL.search)
console.log("myURL.href:", myURL.href)

// 參數順序是 value, key.
myURL.searchParams.forEach((value, key) => {
  console.log(key, value)
})
