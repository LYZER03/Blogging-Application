const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const db = require('./db'); // Import the database logic from db.js

//GET homepage content
router.get('/hello', (req, res) => {
    const name = req.query.name;
    if (!name) {
        res.status(400).send('Bad Request: Missing name query parameter');
    } else if (name === 'Alex') {
        res.status(200).send('Hello, I am Alex, a student of ECE.');
    } else {
        res.status(200).send(`Hello, ${name}!`);
    }
});

//GET /content/about
router.get('./content/about', (req, res) => {
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

//GET /articles
router.get('/articles', (req, res) => {
    res.status(200).json(db.getArticles());
});

//POST /articles
router.post('/articles', (req, res) => {
    const { title, content, date, author } = req.body;

    if (!title || !content || !date || !author) {
        return res.status(400).send('All article fields ( title, content, date, author) are required.');
    }

    const newArticle = {
        id: uuidv4(),
        title,
        content,
        date,
        author
    };

    db.addArticle(newArticle);
    res.status(201).json(newArticle);
});

//GET /articles/:articleId - get an article by ID
router.get('/articles/:articleId', (req, res) => {
    const article = db.getArticleById(req.params.articleId);
    if (article) {
        res.status(200).json(article);
    } else {
        res.status(404).send('Article not found');
    }
});

//GET /articles/:articleId/comments - get all comments of the article with articleId
router.get('/articles/:articleId/comments', (req, res) => {
    const commentsForArticle = db.getCommentsForArticle(req.params.articleId);
    res.json(commentsForArticle);
});

//POST /articles/:articleId/comments - add a new comment to a specific article with articleId
router.post('/articles/:articleId/comments', (req, res) => {
    const articleId = req.params.articleId;
    const { content, author } = req.body;
    const articleExists = db.getArticleById(articleId);

    if (!articleExists) {
        return res.status(404).json({ error: 'Article not found' });
    }

    const newComment = {
        id: uuidv4(),
        timestamp: Date.now(),
        content,
        articleId,
        author
    };

    db.addComment(newComment);
    res.status(201).json(newComment);
});

//GET /articles/:articleId/comments/:commentId - get a comment with commentId of the article with articleId
router.get('/articles/:articleId/comments/:commentId', (req, res) => {
    const articleId = req.params.articleId;
    const commentId = req.params.commentId;
    const targetComment = db.getCommentForArticle(articleId, commentId);

    if (!targetComment) {
        return res.status(404).json({ error: 'Comment not found for the given article' });
    }

    res.json(targetComment);
});

module.exports = router;
