const express = require('express');
const path = require('path');
const livroRoutes = require('./app/routes/livroRoutes');
const apiRoutes = require('./app/routes/api');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

app.use(express.static('public'));
app.use(bodyParser.json()); // Para requisições JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes); // Rotas da API
app.use('/livros', livroRoutes);
app.get('/', (req, res) => res.redirect('/livros'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando: http://localhost:${PORT}`));
