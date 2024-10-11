// Create web server
// 1. create a new web server
// 2. create a new request handler
// 3. create a new response handler
// 4. listen for incoming requests

// 1. create a new web server
const http = require('http')
const server = http.createServer()
// 2. create a new request handler
server.on('request', (request, response) => {
  // 3. create a new response handler
  response.end('Hello, World!')
})
// 4. listen for incoming requests
server.listen(3000)
console.log('Server is running at http://localhost:3000')