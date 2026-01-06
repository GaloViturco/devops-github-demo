const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API DevOps funcionando correctamente 🚀' });
});

app.post('/register', (req, res) => {
  let { username, email } = req.body;

  // Validación de campos obligatorios
  if (!username || !email) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  username = username.trim();
  email = email.trim();

  // Validación básica de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
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

// Demo cierre automático de issue con commit
