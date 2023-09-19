console.log("Hello Node.js!")

// Import a module
const http = require('http')
const handles = require('./handles')

// Declare an http server
http
.createServer(handles.serverHandle)
.listen(8080)