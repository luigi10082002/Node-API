const fs = require('fs');

console.log('Início');

// ⏸️ O programa PARA aqui até terminar
const dados = fs.readFileSync('arquivo.txt', 'utf8');

console.log('Arquivo lido:', dados);
console.log('Fim');
