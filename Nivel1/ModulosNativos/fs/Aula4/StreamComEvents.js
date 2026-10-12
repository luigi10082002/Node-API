const fs = require('fs');

const stream = fs.createReadStream('arquivo.txt', 'utf8');

stream.on('data', (chunk) => {
    console.log('Chunk recebido:', chunk.length, 'bytes');
});

stream.on('end', () => {
    console.log('Leitura completa!');
});

stream.on('error', (error) => {
    console.error('Erro:', error.message);
});
