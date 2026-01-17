const aluno = [
    {nome: 'Joao', nota: 7.8},
    {nome: 'Ana', nota: 9.0}
]
// inperativa faz tudo ao mesmo tempo
let total1 = 0
for(let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota
}
console.log(total1 / aluno.length)

//Declarativa

const getnotas = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = aluno.map(getnotas).reduce(soma)

console.log(total2 / aluno.length)
