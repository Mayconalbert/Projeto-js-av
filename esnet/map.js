const tecnologico = new Map()
tecnologico.set('react', {framework: false})
tecnologico.set('angular', {framework: true}
)
console.log(tecnologico.react)
console.log(tecnologico.get('react').framework)

const chaavesvalores = new Map([
    [function (){}, 'funcao'],
    [{}, 'objeto'],
    [123,'numeeros']
])
chaavesvalores.forEach((vlr, ch) => {
    console.log(ch, vlr)
})

console.log(chaavesvalores.set(123))
chaavesvalores.delete(123)
console.log(chaavesvalores.has(123))
console.log(chaavesvalores.size)
chaavesvalores.set(123, 'a')
chaavesvalores.set(123, 'b')
chaavesvalores.set(234, 'b')
console.log(chaavesvalores)
