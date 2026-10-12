const fs = require('fs');

const stream = fs.createWriteStream('saida.txt');

stream.write('Primeira linha\n');
stream.write('Segunda linha\n');
stream.write('Terceira linha\n');

stream.end();
