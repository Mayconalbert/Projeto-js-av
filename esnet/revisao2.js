// arrow function

const soma = (a, b) => (a + b)
console.log(soma(2,3))

// arrow function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default

function log(texto = 'node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// perado rest

function total (...numero){
    let total = 0
    numero.forEach(n => total += n)
    return total

}

console.log(total(2,3,4,5))