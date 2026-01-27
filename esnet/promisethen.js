function geradordenumeros(min, max) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = (max - min + 1)
        setTimeout(function(){
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
       }, tempo)
 })
}
function geradordenumero() {
    return Promise.all([
        geradordenumero(1, 20, 4000),
        gerandordenumero(1, 40),
        geradordenumero(2, 40),
        geradordenumero(1,60),


    ])

}
geradordenumero().then(numeros => console.log(numeros))