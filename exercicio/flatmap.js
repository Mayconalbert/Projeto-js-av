const escola = [{
    nome: 'Truma m1',
    alunos: [{
        nome: 'Maicon',
        nota: 10
    },{
        nome: 'Barbara',
        nota: 10
    }]

}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'joao',
        nota: 7.0
    },{
        nome: 'Ana',
        nota: 6.0
    }]
}]

const getnotaaluno = alunos => alunos.nota
const getnotaturma = turma => turma.alunos.map(getnotaaluno)

const nota1 = escola.map(getnotaturma)
console.log(nota1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))

}
const nota2 = escola.flatMap(getnotaturma)
console.log(nota2)