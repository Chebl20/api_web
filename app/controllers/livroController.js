const { body, validationResult } = require('express-validator');
const Livro = require('../models/livroModel');

exports.index = async (req, res) => {
  const [livros] = await Livro.findAll();
  res.render('livros/index', { livros });
};

exports.createForm = (req, res) => {
  res.render('livros/create', { errors: [], old: {} });
};

exports.create = [
  body('isbn').notEmpty().withMessage('ISBN é obrigatório'),
  body('titulo').notEmpty().withMessage('Título é obrigatório'),
  body('ano').isInt().withMessage('Ano deve ser número inteiro'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('livros/create', { errors: errors.array(), old: req.body });
    }
    await Livro.create(req.body);
    res.redirect('/livros');
  },
];

exports.editForm = async (req, res) => {
  const [result] = await Livro.findByISBN(req.params.isbn);
  const livro = result[0];
  res.render('livros/edit', { livro, errors: [] });
};

exports.update = [
  body('titulo').notEmpty().withMessage('Título é obrigatório'),
  body('ano').isInt().withMessage('Ano deve ser número inteiro'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const livro = { ...req.body, isbn: req.params.isbn };
      return res.render('livros/edit', { livro, errors: errors.array() });
    }
    await Livro.update(req.params.isbn, req.body);
    res.redirect('/livros');
  },
];

exports.remove = async (req, res) => {
  await Livro.delete(req.params.isbn);
  res.redirect('/livros');
};
