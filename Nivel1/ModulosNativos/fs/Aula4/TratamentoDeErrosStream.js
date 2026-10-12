const fs = require('fs');

const stream = fs.createReadStream('arquivo.txt');

stream.on('error', (error) => {
    console.error('❌ Erro:', error.message);
});

//---------------------- COM PIPE ----------------------//

/*
const fs = require('fs');

const origem = fs.createReadStream('origem.txt');
const destino = fs.createWriteStream('destino.txt');

// Tratar erros em AMBOS os streams
origem.on('error', (err) => console.error('Erro na origem:', err));
destino.on('error', (err) => console.error('Erro no destino:', err));

origem.pipe(destino);
*/
