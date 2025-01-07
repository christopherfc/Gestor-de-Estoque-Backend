const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./db/produtos.db');

// Middleware
app.use(cors());
app.use(express.json());

// Criar tabela
db.run(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    estoque INTEGER NOT NULL,
    descricao TEXT
  )
`);

// Rotas
app.get('/produtos', (req, res) => {
  db.all('SELECT * FROM produtos', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/produtos', (req, res) => {
  const { nome, preco, estoque, descricao } = req.body;
  const query = `INSERT INTO produtos (nome, preco, estoque, descricao) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, preco, estoque, descricao], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, preco, estoque, descricao } = req.body;
  const query = `UPDATE produtos SET nome = ?, preco = ?, estoque = ?, descricao = ? WHERE id = ?`;
  db.run(query, [nome, preco, estoque, descricao, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json({ message: 'Produto atualizado com sucesso!' });
  });
});

app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM produtos WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json({ message: 'Produto excluído com sucesso!' });
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
