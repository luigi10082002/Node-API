const https = require('https');

https.get('https://httpbin.org/headers', (res) => {
    let dados = '';
    res.on('data', chunk => dados += chunk);
    res.on('end', () => {
        const info = JSON.parse(dados);
        console.log('HTTP Nativo - Headers recebidos:');
        console.log('User-Agent:', info.headers['User-Agent'] || '(ausente)');
    });
});
