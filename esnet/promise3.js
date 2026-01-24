function geradordenumeros(min, max) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}
geradordenumeros(1, 20) 
    .then(num => num * 10)
    .then(numx1 => `O numero gerado foi ${numx1}`)
    .then(console.log)