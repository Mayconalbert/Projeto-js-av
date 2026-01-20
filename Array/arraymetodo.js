const piloto = ['Maicon', 'Joao', 'Marcio']
piloto.pop()        // removerar o ultimo item da lista 
console.log(piloto)

piloto.push('Marcio', 'joao')  // adisona item na lista
console.log(piloto)

piloto.shift() // remove da primeira poCIsao
console.log(piloto)

piloto.splice(1, 0, 'Marcio', 'Barbara') // adisona item na lista 
console.log(piloto)

piloto.unshift('Alice') // Adisona o valor na pimeiro valor da lista
console.log(piloto)
const algunpiloto = piloto.slice(2) // clia uma lista nova o os valor prafente do valor dois 
console.log(algunpiloto)

const algunpiloto2 = piloto.slice(1, 4)
console.log(algunpiloto2)

