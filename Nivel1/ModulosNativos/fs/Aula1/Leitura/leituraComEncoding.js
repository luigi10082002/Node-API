async function lerArquivos() {
  try {
    
    //Com encoding (retorna string)
    const texto = await fs.readFile('arquivo.txt', 'utf8');
    console.log(typeof texto); 

  } catch(error) {
    console.log('Erro');
  }
}

lerArquivos();
