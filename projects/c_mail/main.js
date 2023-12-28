const express = require('express');
const { Resend } = require('resend');

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configura tu API key
const apiKey = 're_Cw8rqfKP_GKVinx8L6WUnhiy4fDY572DJ';
const resend = new Resend(apiKey);

// Ruta para enviar correos
app.get('/enviar-correo', async (req, res) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'carlos.sigua@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});