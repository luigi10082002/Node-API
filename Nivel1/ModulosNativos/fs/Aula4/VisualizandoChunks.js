const fs = require('fs');

const stream = fs.createReadStream('arquivo.txt', {
    highWaterMark: 10  // 10 bytes por chunk
});

let total = 0;
stream.on('data', (chunk) => {
    total++;
    console.log(`Chunk ${total}: "${chunk}"`);
});

stream.on('end', () => console.log(`Total: ${total} chunks`));
