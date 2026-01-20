const pessoa = {
    sadacao: 'Bom Dia',
    falar() {
        console.log(this.sadacao)
    }
    
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paragidma: funcional e 00 

const falarpessoa = pessoa.falar.bind(pessoa)
falarpessoa()
