const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let dados = '';
    let contadorChunks = 0;
    
    console.log('Iniciando recebimento...');
    
    res.on('data', (chunk) => {
        contadorChunks++;
        dados += chunk.toString();
        console.log(`Chunk #${contadorChunks} recebido (${chunk.length} bytes)`);
    });
    
    res.on('end', () => {
        console.log('RESPOSTA COMPLETA!');
        console.log(`Total: ${contadorChunks} chunks, ${dados.length} caracteres`);
        console.log('Dados:', JSON.parse(dados));
    });
});
