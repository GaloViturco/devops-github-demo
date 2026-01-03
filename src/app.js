const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API DevOps funcionando correctamente 🚀' });
});

app.post('/register', (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  res.status(201).json({
    message: 'Usuario registrado correctamente',
    user: { username, email }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
