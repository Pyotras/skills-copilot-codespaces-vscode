// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Define routes
router.get('/comments', commentsController.list);
router.get('/comments/:id', commentsController.show);
router.post('/comments', commentsController.create);

// Export module
module.exports = router;
