const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:author_id', articleController.getAuthorArticles);

module.exports = router;