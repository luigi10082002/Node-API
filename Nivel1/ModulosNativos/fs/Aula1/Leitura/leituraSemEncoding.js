async function lerArquivos() {
  try {
    
    //Sem Encoding (retorna Buffer)
    const dados = await fs.readFile('imagem.png');
    console.log(dados);
    console.log(dados.length);

  } catch(error) {
    console.log('Erro');
  }
}

lerArquivos();
