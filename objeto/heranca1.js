const pai = {nome: 'ana', corcabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corcabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}

})
console.log(filha2.nome)
filha2.nome = 'Carlos'
console.log(`${filha2.nome} tem o cabelo ${filha2.corcabelo}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let i in filha2) {
    filha2.hasOwnProperty(i) ?
    console.log(i): console.log(`Por herança: ${i}`)
} 

