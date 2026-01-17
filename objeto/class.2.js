class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome

    }
} 
class pai extends avo {
    constructor(sobrenome, profisao = 'Professor') {
        super(sobrenome)
        this.profisao = profisao
        
    }
}

class Filho extends pai {
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)