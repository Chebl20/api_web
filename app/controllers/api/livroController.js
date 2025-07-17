const { body, validationResult } = require('express-validator');
const Livro = require('../../models/livroModel');

exports.index = async (req, res) => {
  try {
    const [livros] = await Livro.findAll();
    res.json({ success: true, data: livros });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.create = [
  body('isbn').notEmpty().withMessage('ISBN é obrigatório'),
  body('titulo').notEmpty().withMessage('Título é obrigatório'),
  body('ano').isInt().withMessage('Ano deve ser número inteiro'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    try {
      await Livro.create(req.body);
      res.status(201).json({ 
        success: true, 
        message: 'Livro criado com sucesso',
        data: req.body 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }
];
