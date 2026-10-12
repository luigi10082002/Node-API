const fs = require('fs');

const origem = fs.createReadStream('origem.txt');
const destino = fs.createWriteStream('destino.txt');

origem.pipe(destino);

//---------------------- EX ----------------------//

/*
  const fs = require('fs');

  fs.createReadStream('filme-grande.mp4')
    .pipe(fs.createWriteStream('copia.mp4'))
    .on('finish', () => console.log('✅ Cópia concluída'));
*/
