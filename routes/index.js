const express = require('express');
const router = express.Router();

// Array för att hålla inlägg (tillfälligt)
const posts = [];

// Visa alla inlägg
router.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// Visa formulär för att skapa ett nytt inlägg
router.get('/posts/new', (req, res) => {
    res.render('new');
});

// Skapa ett nytt inlägg
router.post('/posts', (req, res) => {
    const newPost = req.body.post;
    posts.push(newPost);
    res.redirect('/');
});

module.exports = router;
