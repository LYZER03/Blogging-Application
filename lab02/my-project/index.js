console.log("Hello Node.js!")

// Import a module
const http = require('http')

const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}

// Declare an http server
http
.createServer(serverHandle)
.listen(8080)