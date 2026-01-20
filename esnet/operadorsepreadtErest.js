// Operador rest(Juntar)/ spread(espalhar)
// usar rest com parametro de funcao

//usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12345.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array

const grupo = ['Joao', 'Ana', ' Caio']
const grupofinal = [ 'Maria', ...grupo, 'Rafaela']
console.log(grupofinal)