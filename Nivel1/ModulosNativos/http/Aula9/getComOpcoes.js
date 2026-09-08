const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
    headers: {
        'User-Agent': 'Node.js Client'
    }
};

http.get(options, (res) => {
    console.log('Status:', res.statusCode);
    console.log('Headers:', res.headers);
    
    let dados = '';
    res.on('data', chunk => dados += chunk);
    res.on('end', () => {
        console.log('Dados:', JSON.parse(dados));
    });
});
