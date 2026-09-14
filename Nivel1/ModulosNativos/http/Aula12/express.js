const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/usuarios', (req, res) => {
    res.json([{ nome: 'João' }]);
});

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    res.status(201).json({ id: 1, ...usuario });
});

app.use((req, res) => {
    res.status(404).send('Não encontrado');
});

app.listen(3000);
