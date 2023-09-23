const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const content = '<!DOCTYPE html>' +
    '<html><body>' +
    '<h1>Welcome to the Hello App!</h1>' +
    '<p>Usage:</p>' +
    '<ul>' +
    '<li><a href="/hello?name=John">/hello?name=John</a> - Say hello to John</li>' +
    '<li><a href="/hello?name=Alex">/hello?name=Alex</a> - Introduce Yourself</li>' +
    '</ul>' +
    '</body></html>';

app.get('/', (req, res) => {
    res.status(200).send(content);
});

app.get('/hello', (req, res) => {
    const name = req.query.name;
    if (!name) {
        res.status(400).send('Bad Request: Missing name query parameter');
    } else if (name === 'Alex') {
        res.status(200).send('Hello, I am Alex, a student of ECE.');
    } else {
        res.status(200).send(`Hello, ${name}!`);
    }
});

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, 'content', 'about.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('404 Not Found');
        } else {
            const aboutData = JSON.parse(data);
            res.status(200).json(aboutData);
        }
    });
});

const db = {
    articles: [
        {
            id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            title: 'My article',
            content: 'Content of the article.',
            date: '04/10/2022',
            author: 'Liz Gringer'
        }
    ],
    comments: [
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            timestamp: 1664835049,
            content: 'Content of the comment.',
            articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            author: 'Bob McLaren'
        }
    ]
}

app.get('/articles', (req, res) => {
    res.status(200).json(db.articles);
});

app.post('/articles', (req, res) => {
    const { id, title, content, date, author } = req.body;

    if (!id || !title || !content || !date || !author) {
        return res.status(400).send('All article fields (id, title, content, date, author) are required.');
    }

    const newArticle = {
        id,
        title,
        content,
        date,
        author
    };

    db.articles.push(newArticle);
    res.status(201).json(newArticle);
});

app.get('/articles/:id', (req, res) => {
    const article = db.articles.find(a => a.id === req.params.id);
    if (article) {
        res.status(200).json(article);
    } else {
        res.status(404).send('Article not found');
    }
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});