const fs = require('fs');

fs.watch('./minha-pasta', (evento, arquivo) => {
    console.log(`[${evento}] ${arquivo}`);
});

// Ao salvar um arquivo:
// [change] app.js
// [rename] novo-arquivo.txt
