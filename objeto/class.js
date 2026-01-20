class lancamento {
    constructor(nome = 'ana', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class ciclofinanceiro {
    constructor (mes, ano){
        this.mes
        this.ano
        this.lancamentos = []
    } 
    addlancamentos(...lancamentos){
        lancamentos.forEach(i => this.lancamentos.push(i))
    }
    sumario (){
        let valorconsolidado = 0
        this.lancamentos.forEach(i => { valorconsolidado += i.valor})
        return valorconsolidado

    }


}
const salario = new lancamento('Salario', 3500)
const contadeluz = new lancamento('Luz', -1000)

const contas = new ciclofinanceiro(1, 2018)
contas.addlancamentos(salario, contadeluz)
console.log(contas.sumario())