import fs from 'fs';  //biblioteca nativa do node 
import chalk from 'chalk';

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
        console.log(chalk.green(texto))
    } catch(erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');



//função assíncrona para ler o arquivo usando o fs próprio do Node que faz isso
//promisses com then()
/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}
*/