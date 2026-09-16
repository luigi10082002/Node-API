const fs = require('fs/promises');

async function criarArquivo() {
  try {

    await fs.mkdir('logs', { recursive: true });
    await fs.writeFile('logs/app.log', 'Log iniciado');
    console.log('Arquivo criado com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

criarArquivo();
