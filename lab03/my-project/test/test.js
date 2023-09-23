
const request = require('supertest');
const app = require('../app'); // path to your Express app
const assert = require('assert');

describe('Article API Endpoints', function () {

    // 1. Test fetching all articles
    it('GET /articles - should return all articles', function (done) {
        request(app)
            .get('/articles')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // 2. Test adding a new article
    it('POST /articles - should add a new article', function (done) {
        request(app)
            .post('/articles')
            .send({
                title: 'Test Article',
                content: 'This is a test article',
                date: '05/10/2022',
                author: 'John Doe'
            })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });

    // 3. Test fetching an article by its ID
    it('GET /articles/:articleId - should return a specific article', function (done) {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // 4. Test fetching all comments of a specific article
    it('GET /articles/:articleId/comments - should return all comments of a specific article', function (done) {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // 5. Test adding a new comment to a specific article
    it('POST /articles/:articleId/comments - should add a new comment', function (done) {
        request(app)
            .post('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments')
            .send({
                content: 'Test Comment',
                author: 'Jane Doe'
            })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
    // 6. Test fetching a specific comment of a specific article
    it('GET /articles/:articleId/comments/:commentId - should return a specific comment', function (done) {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});