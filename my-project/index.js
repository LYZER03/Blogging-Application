// Import a module
const http = require('http');
const handles = require('./handles');

console.log("Hello Node.js!");

// Declare an http server
http
.createServer(handles.serverHandle)
.listen(8080);