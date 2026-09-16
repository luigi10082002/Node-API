const fs = require('fs');

const watcher = fs.watch('arquivo.txt', (evento, nomeArquivo) => {
    console.log('Evento:', evento); // 'change' ou 'rename'
    console.log('Arquivo:', nomeArquivo);
});

// Para parar de observar:
watcher.close();
