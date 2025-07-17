# 📚 CRUD de Livros com Node.js, Express, EJS e MySQL

Este projeto implementa um sistema completo de **CRUD (Create, Read, Update, Delete)** para a entidade **Livro**, utilizando:

- `Node.js` como runtime
- `Express.js` como framework
- `EJS` para renderização de views HTML
- `MySQL` como banco de dados
- `express-validator` para validações
- `body-parser` para tratamento de requisições

---

## 🧾 Entidade Livro

| Campo      | Tipo       | Descrição                         |
|------------|------------|-----------------------------------|
| `isbn`     | VARCHAR(13) | Identificador único do livro     |
| `titulo`   | VARCHAR     | Nome do livro                    |
| `editora`  | VARCHAR     | Nome da editora                  |
| `autor`    | VARCHAR     | Nome do autor                    |
| `ano`      | INT         | Ano de publicação                |
| `assunto`  | VARCHAR     | Assunto ou categoria do livro    |

---

## 🏗️ Tecnologias utilizadas

- Node.js
- Express.js
- EJS
- MySQL
- express-validator
- body-parser
- dotenv

---

## 🚀 Como executar

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/crud-livros.git
cd crud-livros
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Configure o banco de dados
Crie o banco no MySQL:

sql
Copiar
Editar
CREATE DATABASE crud_livros;

USE crud_livros;

CREATE TABLE livros (
  isbn VARCHAR(13) PRIMARY KEY,
  titulo VARCHAR(255),
  editora VARCHAR(100),
  autor VARCHAR(100),
  ano INT,
  assunto VARCHAR(100)
);
4. Crie o arquivo .env
env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_livros
PORT=3000
5. Rode o servidor
bash
Copiar
Editar
node server.js
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:3000
📬 Requisições com Postman
➕ Criar Livro
pgsql
Copiar
Editar
POST /livros/create
Content-Type: application/json
json
Copiar
Editar
{
  "isbn": "9781234567890",
  "titulo": "Node.js Avançado",
  "editora": "TechBooks",
  "autor": "Gpeto da Programação",
  "ano": 2024,
  "assunto": "Backend"
}
📖 Listar todos os livros
bash
Copiar
Editar
GET /livros
✏️ Atualizar um livro
bash
Copiar
Editar
PUT /livros/:isbn
Content-Type: application/json
json
Copiar
Editar
{
  "titulo": "Node.js Atualizado",
  "editora": "TechBooks Pro",
  "autor": "Gpeto da Atualização",
  "ano": 2025,
  "assunto": "Back-End Avançado"
}
❌ Deletar um livro
sql
Copiar
Editar
DELETE /livros/delete/:isbn
⚠️ Se sua aplicação não tiver rota DELETE, use:

arduino
Copiar
Editar
POST /livros/delete/:isbn
📚 Tutorial base recomendado
Esse projeto foi baseado e adaptado a partir do seguinte tutorial completo:

👉 Tutorial CRUD Node.js + Express + EJS + MySQL
(Atualize com o link real que você usou)

👨‍💻 Autor
Atividade de implementação prática para a disciplina de LPWeb.

Desenvolvido por Gpeto para meu Amigo 👊😉

yaml
Copiar
Editar

---

Se quiser, posso gerar esse README já salvo num arquivo `.md` ou incluir prints, instruções extras para o Docker, o