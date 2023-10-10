const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./route'); // Import the routes from routes.js
const content = '<!DOCTYPE html>' +
    '<html><body>' +
    '<h1>Welcome to the Hello App!</h1>' +
    '<p>Usage:</p>' +
    '<ul>' +
    '<li><a href="/hello?name=John">/hello?name=John</a> - Say hello to John</li>' +
    '<li><a href="/hello?name=Alex">/hello?name=Alex</a> - Introduce Yourself</li>' +
    '</ul>' +
    '</body></html>';

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(content);
});

app.use('/', routes);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // Export the Express app

