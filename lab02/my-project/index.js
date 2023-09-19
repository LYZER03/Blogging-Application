console.log("Hello Node.js!")

// Import a module
const http = require('http')
// Import Node url module
const url = require('url')

// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname
  console.log(path)

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'})

  //Write a response content
  res.write(path)

  res.end()
}

// Declare an http server
http
.createServer(serverHandle)
.listen(8080)