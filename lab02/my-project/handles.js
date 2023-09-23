const url = require('url');
const qs = require('querystring');

const fs = require('fs');
const path = require('path');


const content = '<!DOCTYPE html>' +
'<html><body>'+
    '<h1>Welcome to the Hello App!</h1>'+
    '<p>Usage:</p>'+
    '<ul>'+
        '<li><a href="/hello?name=John">/hello?name=John</a> - Say hello to John</li>'+
        '<li><a href="/hello?name=Alex">/hello?name=Alex</a> - Introduce Yourself</li>'+
    '</ul>'+
'</body></html>'


const serverHandle = (req, res) =>{
    const route = url.parse(req.url);
    const params = qs.parse(route.query);

    if (route.pathname === '/') {
        // Route: /
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();

    } else if (route.pathname === '/hello') {
        // Route: /hello
        const name = params.name;
        if (!name) {
            // If the 'name' query parameter is missing
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Missing name query parameter');
        } else if (name === 'Alex') {
            // If 'name' is 'YourName', reply with a short intro
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, I am Alex, a student of ECE.');
        } else {
            // For any other 'name', reply with a hello message
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hello, ${name}!`);
        }
    }else if (route.pathname === '/about'){
        // route : about
        const filePath = path.join(__dirname, 'content', 'about.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              // If the file doesn't exist, send a 404 response
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('404 Not Found');
            } else {
              // If the file exists, send its content as JSON
              const aboutData = JSON.parse(data);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(aboutData, null, 2));
            }
        });
    } else {
        // For any other route, reply with a 404 Not Found response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

module.exports = {
    serverHandle,
};