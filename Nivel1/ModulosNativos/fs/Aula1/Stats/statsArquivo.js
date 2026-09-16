const fs = require('fs/promises');

async function statusArquivo() {
  try {

    const stats = await fs.stat('arquivo.txt');
    console.log(stats);

    console.log("=====================");

    console.log('É arquivo?', stats.isFile());
    console.log('É pasta?', stats.isDirectory());
    console.log('É link simbólico?', stats.isSymbolicLink());
    console.log('É socket?', stats.isSocket());

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

statusArquivo();
