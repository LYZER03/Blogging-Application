console.log("Hello Node.js!")

// Import a module
const http = require('http')
// Import Node url module
const url = require('url')
const qs = require('querystring')

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
  // Retrieve and print the queryParams
  const queryParams = qs.parse(url.parse(req.url).query)
  console.log(queryParams)

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'})

  //Write a response content
  res.write(content)

  res.end()
}

// Declare an http server
http
.createServer(serverHandle)
.listen(8080)