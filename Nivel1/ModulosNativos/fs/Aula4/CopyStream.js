const fs = require('fs');

function copiarArquivo(origem, destino) {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(origem);
        const writeStream = fs.createWriteStream(destino);
        
        readStream.on('error', reject);
        writeStream.on('error', reject);
        
        writeStream.on('finish', () => {
            console.log('Cópia concluída!');
            resolve();
        });
        
        readStream.pipe(writeStream);
    });
}

copiarArquivo('filme.mp4', 'filme-copia.mp4');

//---------------------- COM PIPE ----------------------//

/*
const fs = require('fs');
const { pipeline } = require('stream/promises');

async function copiarArquivo(origem, destino) {
    try {
        await pipeline(
            fs.createReadStream(origem),
            fs.createWriteStream(destino)
        );
        console.log('Cópia concluída!');
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

copiarArquivo('filme.mp4', 'filme-copia.mp4');
*/
