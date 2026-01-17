function falardepois(segundos, frase){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            reject(frase)
        },segundos * 1000)
    })
}

falardepois(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log('Erro: ' + e))