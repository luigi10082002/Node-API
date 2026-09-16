const fs = require('fs');

console.log('Observando mudanças em "dados.txt"...');

const watcher = fs.watch('dados.txt', (evento) => {
    if (evento === 'change') {
        const conteudo = fs.readFileSync('dados.txt', 'utf8');
        console.log('Conteúdo atual:', conteudo);
    }
});

setTimeout(() => {
    watcher.close();
    console.log('Parou de observar');
}, 3000);
