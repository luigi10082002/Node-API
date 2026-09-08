const http = require('http');

http.get('http://site-inexistente.com', (res) => {
    let dados = '';
    
    res.on('data', (chunk) => {
        dados += chunk;
    });
    
    res.on('end', () => {
        console.log('Dados:', dados);
    });
}).on('error', (error) => {
    console.error('Erro na requisição:', error.message);
});
