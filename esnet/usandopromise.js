// Sem promise

//codigo nao foncionou !!!

const http = require('http')

const getturma = (letras) => {
    const url = `http://files.cod3r.com.br/cruso-js/turma${letras}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))

                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
let nomes = []
getturma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))


})