const db = require('../../config/db');

module.exports = {
  findAll() {
    return db.query('SELECT * FROM livros');
  },
  findByISBN(isbn) {
    return db.query('SELECT * FROM livros WHERE isbn = ?', [isbn]);
  },
  create(livro) {
    return db.query(
      'INSERT INTO livros (isbn, titulo, editora, autor, ano, assunto) VALUES (?, ?, ?, ?, ?, ?)',
      [livro.isbn, livro.titulo, livro.editora, livro.autor, livro.ano, livro.assunto]
    );
  },
  update(isbn, livro) {
    return db.query(
      'UPDATE livros SET titulo = ?, editora = ?, autor = ?, ano = ?, assunto = ? WHERE isbn = ?',
      [livro.titulo, livro.editora, livro.autor, livro.ano, livro.assunto, isbn]
    );
  },
  delete(isbn) {
    return db.query('DELETE FROM livros WHERE isbn = ?', [isbn]);
  },
};
