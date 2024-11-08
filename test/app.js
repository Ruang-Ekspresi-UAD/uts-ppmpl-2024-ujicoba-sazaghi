const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit-form', (req, res) => {
    const { nama, email } = req.body;

    if (!nama || !email) {
        return res.status(400).json({ message: 'Nama dan email harus diisi.' });
    }

    res.status(200).json({ message: `Terima kasih, ${nama}! Kami akan menghubungi Anda di ${email}.` });
});

module.exports = app;
