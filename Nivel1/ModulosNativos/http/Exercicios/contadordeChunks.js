const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
    let dados = '';
    let countChunks = 0;
    let totalBytes = 0;
    
    console.log('Recebendo dados...\n');
    
    res.on('data', (chunk) => {
        countChunks++;
        totalBytes += chunk.length;
        console.log(`Chunk #${countChunks}: ${chunk.length} bytes`);
        dados += chunk.toString();
    });
    
    res.on('end', () => {
        console.log('\nRESUMO:');
        console.log(`Total de chunks: ${countChunks}`);
        console.log(`Total de bytes: ${totalBytes}`);
        console.log(`Total de caracteres: ${dados.length}`);
        
        const posts = JSON.parse(dados);
        console.log(`Posts recebidos: ${posts.length}`);
    });
});
