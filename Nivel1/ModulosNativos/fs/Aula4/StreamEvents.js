//---------------------- ReadStream ----------------------//

const read = fs.createReadStream('arquivo.txt');

read.on('data', (chunk) => {});       // Chunk recebido
read.on('end', () => {});             // Fim da leitura
read.on('error', (err) => {});        // Erro
read.on('close', () => {});           // Stream fechado
read.on('open', () => {});            // Arquivo aberto

//---------------------- WriteStream ----------------------//

const write = fs.createWriteStream('saida.txt');

write.on('finish', () => {});          // Escrita concluída
write.on('error', (err) => {});        // Erro
write.on('close', () => {});           // Stream fechado
write.on('open', () => {});            // Arquivo aberto
write.on('pipe', (src) => {});         // Conectado via pipe
