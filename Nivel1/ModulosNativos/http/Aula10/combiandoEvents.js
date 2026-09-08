const http = require('http');

const req = http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
    console.log('CONEXÃO ESTABELECIDA');
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers recebidos:`, res.headers);
    
    let dados = '';
    let chunks = 0;
    
    res.on('data', (chunk) => {
        chunks++;
        dados += chunk.toString();
        console.log(`Chunk #${chunks}: ${chunk.length} bytes`);
    });
    
    res.on('end', () => {
        console.log('FIM DOS DADOS');
        console.log(`Resumo: ${chunks} chunks, ${dados.length} caracteres`);
        
        try {
            const posts = JSON.parse(dados);
            console.log(`${posts.length} posts recebidos`);
        } catch (e) {
            console.log('Dados não são JSON válido');
        }
    });
    
    res.on('error', (error) => {
        console.error('Erro na resposta:', error);
    });
    
    res.on('close', () => {
        console.log('Conexão fechada');
    });
});

req.on('error', (error) => {
    console.error('Erro na requisição:', error);
});

req.on('timeout', () => {
    console.error('Timeout!');
    req.destroy();
});

req.setTimeout(10000); 
req.end();
