const { reject } = require("lodash")

function geradordenumeros(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numeros repetidos')
        }else{
            resolve(aleatorio)
        }
        
        
    })
}

async function gerarmegasena(qtdnumeros, tentativa = 1) {
    try {
    const numeros = []
    for (let _ of Array(qtdnumeros).fill()) {
        numeros.push(await geradordenumeros(1, 60, numeros))
    }
    return numeros
    } catch(e){
        if (tentativa > 10){
        throw 'Nao deu certo'
        } else {
        return gerarmegasena(qtdnumeros, tentativa + 1)
         }
    }
}
gerarmegasena(80)
    .then(console.log)
    .catch(console.log)