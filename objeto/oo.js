const produto = new Object
produto.nome = 'Mesa'
produto['marca do produto'] = 'ml'
produto.preso = 220

console.log(produto)
console.log(produto['marca do produto'])
delete produto.preso
console.log(produto)

const carro = {
    modelo: 'sw4',
    valor: 100000,
    proprietario: {
        nome: 'Maicon',
        idade: 26,
        endereso: {
            rua: 'Beija flor',
            numero: 1505,
        }

    },
    condutores: [{
        nome: 'fernando',
        idade: 39,     
    },{
        nome: 'ana',
        idade: 23

    }],
    calcularValorseguro: function(){
        //....
    }
    
}

console.log(carro)

carro.proprietario.endereso.numero = 1000
carro['proprietario'] ['endereso'] ['rua'] = 'jacare'
console.log(carro)
delete carro.condutores
delete carro.calcularValorseguro
console.log(carro)
