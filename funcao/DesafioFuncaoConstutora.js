function pessoa(name){
    this.name = name
    
    this.falar = function(){
        console.log(`Meu nome é ${this.name}`)
    }
}
const p1 = new pessoa('Maicon')
p1.falar()