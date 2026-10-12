const stream = fs.createReadStream('arquivo.txt', {
    highWaterMark: 1024 * 1024  // 1MB por chunk
});
