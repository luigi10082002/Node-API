const https = require('https');

https.get('https://api-protegida.com/dados', (res) => {
    let dados = '';
    res.on('data', chunk => dados += chunk);
    res.on('end', () => console.log(dados));
}).on('error', (error) => {
    console.error('Erro:', error.message);
});
