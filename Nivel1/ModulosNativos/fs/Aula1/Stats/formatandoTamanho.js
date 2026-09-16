const fs = require('fs/promises');

function formatarBytes(bytes) {
    const unidades = ['B', 'KB', 'MB', 'GB'];
    let i = 0;
    while (bytes >= 1024 && i < unidades.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${unidades[i]}`;
}

(async () => {
    const stats = await fs.stat('arquivo.txt');
    console.log('Tamanho:', formatarBytes(stats.size));
})();
