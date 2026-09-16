const fs = require('fs/promises');

async function moverRenomearArquivo() {
  try {

    // Mover (mesma pasta = renomear)
    await fs.rename('./A/antigo.txt', './A/novo.txt');

    // Mover para outra pasta
    await fs.rename('./A/origem.txt', './B/destino.txt');

    console.log('Arquivo movido/renomeado');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

moverRenomearArquivo();
