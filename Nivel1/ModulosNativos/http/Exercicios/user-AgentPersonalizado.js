const https = require('https');

const options = {
    hostname: 'httpbin.org',
    path: '/headers',
    method: 'GET',
    headers: {
        'User-Agent': 'MeuApp/1.0 (Node.js)'
    }
};

https.get(options, (res) => {
    let dados = '';
    res.on('data', chunk => dados += chunk);
    res.on('end', () => {
        const info = JSON.parse(dados);
        console.log('User-Agent enviado:', info.headers['User-Agent']);
    });
});
