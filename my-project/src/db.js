const { v4: uuidv4 } = require('uuid');

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
};

function getArticles() {
    return db.articles;
}

function addArticle(newArticle) {
    db.articles.push(newArticle);
}

function getArticleById(articleId) {
    return db.articles.find(a => a.id === articleId);
}

function getCommentsForArticle(articleId) {
    return db.comments.filter(comment => comment.articleId === articleId);
}

function addComment(newComment) {
    db.comments.push(newComment);
}

function getCommentForArticle(articleId, commentId) {
    return db.comments.find(comment => comment.id === commentId && comment.articleId === articleId);
}

module.exports = {
    getArticles,
    addArticle,
    getArticleById,
    getCommentsForArticle,
    addComment,
    getCommentForArticle
};
