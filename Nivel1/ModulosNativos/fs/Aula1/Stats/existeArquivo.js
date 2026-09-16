const fs = require('fs/promises');

async function existe(caminho) {
    try {
        await fs.access(caminho);
        return true;
    } catch {
        return false;
    }
}

(async () => {
    console.log(await existe('arquivo.txt'));
})();
