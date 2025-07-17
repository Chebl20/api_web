const express = require('express');
const router = express.Router();
const livroController = require('../controllers/api/livroController');

router.get('/livros', livroController.index);
router.post('/livros', livroController.create);

module.exports = router;
