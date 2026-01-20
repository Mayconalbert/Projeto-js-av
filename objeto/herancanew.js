function aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Ate preve', 456)
console.log(aula1, aula2) 

// Simulando o new

function novo(f, ...params){
    const obt = {}
    obt.__proto__ = f.prototype
    f.apply(obt, params)
    return obt
}
const aula3 = novo(aula,'ola', 148)
const aula4 = novo(aula,'Ate Breve', 980)
console.log(aula3, aula4)