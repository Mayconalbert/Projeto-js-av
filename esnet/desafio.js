const fs = require('fs') 
const path = require('path')

function lerarquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve (conteudo.toString())
        })
        console.log('Lendo arquivo...')
    })

}
const caminho = path.join(__dirname, 'dados.txt')
lerarquivo(caminho)
    .then(conteudo => console.log(conteudo))

