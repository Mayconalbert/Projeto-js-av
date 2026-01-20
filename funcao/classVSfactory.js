class pessoa{
    constructor(name){
        this.name = name
    }
    falar(){
        console.log(`Meu nome é ${this.name}`)
    }
}
const p1 = new pessoa('Baarbara')
p1.falar()

const pessoa2 = name => {
    return{
    falar: () => console.log(`Ja Amei muito ${name}`)
    }
}
const p2 = pessoa2('Barbara')
p2.falar()
