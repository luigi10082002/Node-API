const fs = require('fs');

async function lerStream() {
    const stream = fs.createReadStream('arquivo.txt', 'utf8');
    
    for await (const chunk of stream) {
        console.log('Chunk:', chunk.length, 'bytes');
    }
    
    console.log('Fim!');
}

lerStream();
