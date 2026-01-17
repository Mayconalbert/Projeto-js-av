const aluno = [
    {nome: 'Joao', nota: 7.5, bolsista: true},
    {nome: 'Ana', nota: 5.3, bolsista: true},
    {nome: 'Barbara', nota: 9.0, bolsista: false},
    {nome: 'Maicon', nota: 7.0, bolsista: true}


]
console.log(aluno.map(a => a.nota))
const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual

})

