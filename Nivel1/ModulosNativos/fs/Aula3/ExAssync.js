const fs = require('fs');

console.log('Início');

// Não bloqueia — dispara a leitura e continua
fs.readFile('arquivo.txt', 'utf8', (err, dados) => {
    console.log('Arquivo lido:', dados);
});

console.log('Fim');
