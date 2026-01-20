function pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)


    }/*.bind(this)*/,1000 // duas forma de traser um resultado pq o this nao fonciona de fomar espera e esses padrao som para bular esse padrao 
    )
}
new pessoa