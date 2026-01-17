const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
// sincrona

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // O JSON.parse transforma o conteudo em objeto
    console.log(`${config.db.hot}: ${config.db.port}`)
})

const configa = require('./arquivo.json')
console.log(configa.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})