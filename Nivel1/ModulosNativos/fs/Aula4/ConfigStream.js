const stream = fs.createReadStream('arquivo.txt', {
    encoding: 'utf8',          // Codificação (opcional)
    highWaterMark: 64 * 1024,  // Tamanho do chunk (64KB padrão)
    start: 0,                  // Byte inicial
    end: 1023                  // Byte final (opcional)
});
