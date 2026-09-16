const fs = require('fs/promises');

async function criarPastasAninhadas() {
  try {

    //Sem recursive: erro se 'pai' não existir
    // * await fs.mkdir('pai/filho/neto');

    //Com recursive: cria toda a árvore
    await fs.mkdir('pai/filho/neto', { recursive: true });
    console.log('Pastas criadas com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

criarPastasAninhadas();
