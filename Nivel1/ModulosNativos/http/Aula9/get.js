const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let dados = '';
    
    res.on('data', (chunk) => {
        dados += chunk;
    });
    
    res.on('end', () => {
        console.log('Resposta recebida:');
        console.log(JSON.parse(dados));
    });
}).on('error', (error) => {
    console.error('Erro na requisição:', error.message);
});
