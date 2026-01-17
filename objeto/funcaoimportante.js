const pessoa = {
    nome: 'Rebeca',
    idade: 18,
    peso: 70
}

console.log(Object.values(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
Object.entries(pessoa).forEach(([cahve, valor])  => {
    console.log(`${cahve}: ${valor}`)

})

Object.defineProperty(pessoa, 'datanacimento',{
    enumerable: true,
    writable: false,
    value: '01.09.2030'

})
console.log(pessoa.datanacimento)
console.log(Object.keys(pessoa))

// objt novas funcoes de 2015

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 5}
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c = 123

console.log(obj)


