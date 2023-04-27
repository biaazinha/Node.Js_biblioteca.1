import fs from 'fs';  //biblioteca nativa do node 
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}

function trataErro(erro){
    //jogar novo erro - lançando uma instancia do objeto erro do java script para lidar com erro e coisas inexperadas 
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório')); //mensagem para usuário
}

// async/await -> assíncrona 
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch(erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md');