const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint para criar código
app.post('/api/create', (req, res) => {
  const { code, type, reward, adminDiscord } = req.body;
  // Lógica de salvar no banco (ex: SQLite, D1, etc.)
  res.json({ success: true, message: 'Código criado' });
});

// Endpoint para ban
app.post('/api/ban', (req, res) => {
  const { robloxUser, reason, durationMs, adminDiscord } = req.body;
  // Lógica
  res.json({ success: true });
});

// Endpoint para unban
app.post('/api/unban', (req, res) => {
  // ...
  res.json({ success: true });
});

// Endpoint para kick
app.post('/api/kick', (req, res) => {
  // ...
  res.json({ success: true });
});

// Endpoint para último resgate (GET)
app.get('/api/checkredeemlog', (req, res) => {
  // Retorna o último resgate
  res.json({ id: 123, playerName: "Exemplo", code: "ABC123", ... });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
