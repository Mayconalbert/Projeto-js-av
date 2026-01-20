const aluno = [
    {nome: 'Joao', nota: 7.5, bolsista: true},
    {nome: 'Ana', nota: 5.3, bolsista: true},
    {nome: 'Barbara', nota: 9.0, bolsista: false},
    {nome: 'Maicon', nota: 7.0, bolsista: true}
]
// Todos sao bolsistas
const todosbolsista = (maicon, bolsista) => maicon && bolsista
console.log(aluno.map(a => a.bolsista ).reduce(todosbolsista))

//Algum aluno bolsista

const alunobolsista = (resultados, bolsista) => resultados || bolsista
console.log(aluno.map(a => a.bolsista).reduce(alunobolsista ) ) 