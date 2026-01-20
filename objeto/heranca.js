const avo = {a1: 'A'}
const pai = {__proto__: avo, b2:'B', c3: 'C'}
const filho = {__proto__: pai, c3: '4' }
console.log(filho.__proto__)
console.log(filho.b2, filho.a1, filho.b2, filho.c3)
const carro = {
    velatual:  0,
    velmax:  100,
    acelerando(delta){
        if (this.velatual + delta <= this.velmax){
            this.velatual += delta
        } else {
            this.velatual = this.velmax
        }

    },
    status(){
        return `${this.velatual}km/h de ${this.velmax} km/h`
    }
}
const ferrari = {
    moledelo: 'Ferarri',
    velmax: 324,
}

const volvo = {
    modelo: 'FH',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)

volvo.acelerando(90)
console.log(volvo.status())
ferrari.acelerando(300)
console.log(ferrari.status())