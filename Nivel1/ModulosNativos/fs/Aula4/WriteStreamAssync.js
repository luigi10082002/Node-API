const fs = require('fs');

async function escrever() {
    const stream = fs.createWriteStream('saida.txt');
    
    stream.write('Linha 1\n');
    stream.write('Linha 2\n');
    
    stream.end();
}

escrever();
