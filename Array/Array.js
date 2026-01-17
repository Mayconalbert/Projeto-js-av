console.log(typeof Array, typeof new Array, typeof[])
let aprovado = new Array('Carlos', 'Maicon', 'Maria')
console.log(aprovado)
aprovado = ['Bia', 'Fernanda', 'jose']
console.log(aprovado)
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])
aprovado [3] = 'joao'
console.log(aprovado)
console.log(aprovado.push('Abia'))
console.log(aprovado)
console.log(aprovado.length)

aprovado[9] = 'Paulão'
console.log(aprovado.length)
console.log(aprovado[8] === undefined )
console.log(aprovado)
aprovado.sort()
console.log(aprovado)

delete aprovado[1]
console.log(aprovado[1])

aprovado = ['Bia', 'Sila', 'Joao']
aprovado.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovado)
