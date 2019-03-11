const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');
const PostsController = require('../controllers/posts');

// Create post route checks for auth and extracts the image file
router.post('', checkAuth, extractFile, PostsController.createPost);

// Update post route checks for auth
router.put('/:id', checkAuth, extractFile, PostsController.updatePost);

// Get all posts route
router.get('', PostsController.getPosts);

// Get single post route
router.get('/:id', PostsController.getPost);

// Delete single post route
router.delete('/:id', checkAuth,PostsController.deletePost);

module.exports = router;
