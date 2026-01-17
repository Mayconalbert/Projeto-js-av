// objt em js
const objt1 = {}
console.log(objt1)



console.log(typeof Object, typeof new Object)
const objt2 = {}
console.log(objt2)

// Funcao construtora
function produto(nome, preso, desc){
    this.nome = nome
    this.presocomdesconto = () => {
        return preso * (1 - desc)
    }
}
const p1 = new produto('caneta', 4.5, 0.2)
const p2 = new produto('Maria', 11300, 1)
console.log(p1.presocomdesconto(), p2.presocomdesconto())

// Funcao factorial

function criarfuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getsalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = new criarfuncionario('Maicon', 2600, 0)
const f2 =new criarfuncionario('Barbara', 7000, 3)
console.log(f1.getsalario(), f2.getsalario())
   

// objt crate

const filha = Object.create(null)
filha.nome = ' Jao'
console.log(filha)

// uma funcao que retonar um objt
const fromJSON = JSON.parse('{"info": "Sou o JSON"}')
console.log(fromJSON.info)