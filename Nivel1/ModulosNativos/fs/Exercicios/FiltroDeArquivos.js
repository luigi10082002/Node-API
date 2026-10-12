const fs = require('fs');

async function filtrarArquivo(origem, destino, palavra) {
    const readStream = fs.createReadStream(origem, 'utf8');
    const writeStream = fs.createWriteStream(destino);
    
    let buffer = '';
    let contador = 0;
    
    for await (const chunk of readStream) {
        buffer += chunk;
        
        const linhas = buffer.split('\n');
        buffer = linhas.pop();  // guarda linha incompleta
        
        for (const linha of linhas) {
            if (linha.includes(palavra)) {
                writeStream.write(linha + '\n');
                contador++;
            }
        }
    }
    
    // Última linha
    if (buffer.includes(palavra)) {
        writeStream.write(buffer + '\n');
        contador++;
    }
    
    writeStream.end();
    
    console.log(`${contador} linhas com "${palavra}" gravadas`);
}

filtrarArquivo('grande.txt', 'filtrado.txt', 'Node.js');
