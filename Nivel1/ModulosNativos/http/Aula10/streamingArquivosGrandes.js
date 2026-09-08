const http = require('http');
const fs = require('fs');

http.get('http://exemplo.com/arquivo-grande.pdf', (res) => {
    console.log('Iniciando download...');
    
    const writeStream = fs.createWriteStream('download.pdf');
    let bytesBaixados = 0;
    
    res.on('data', (chunk) => {
        bytesBaixados += chunk.length;
        writeStream.write(chunk);
        
        if (bytesBaixados % (1024 * 1024) < 1024) {
            console.log(`⬇Baixados ${Math.round(bytesBaixados / 1024 / 1024)} MB`);
        }
    });
    
    res.on('end', () => {
        writeStream.end();
        console.log(`Download completo! ${Math.round(bytesBaixados / 1024 / 1024)} MB baixados`);
    });
    
    res.on('error', (error) => {
        console.error('Erro no download:', error);
    });
}).on('error', (error) => {
    console.error('Erro na conexão:', error);
});
