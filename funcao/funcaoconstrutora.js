function carro (velocidademax = 200, delta = 5){
    //atributo privado
    let velocidadeatual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidademax){
            velocidadeatual += delta

        }else{
            velocidadeatual = velocidademax
        }

    }
    this.getvelocidade = function (){
        return velocidadeatual
       }
}
const uno = new  carro()
uno.acelerar()
console.log(uno.getvelocidade())

const ferrari = new carro(1000, 5)
ferrari.acelerar()
console.log(ferrari.getvelocidade())

console.log(typeof carro)
console.log(typeof ferrari)
