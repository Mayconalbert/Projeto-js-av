function funcionarOunao(valor, chanceerro) {
    return new Promise((resolve, reject) => {
        con.gof("dentro erro")
        try {
            if (Math.random() < chanceerro) {
                reject('Ocorreu um erro!')
            } else{
                resolve(valor)

             } 

        }catch (e){

        }
            
    })
    
}

funcionarOunao('Testando...', 0.5)
    .then(v => `valor: ${v}`)
    .then(v => console.log(v),
        //err => console.log(`Erro Esp.: ${err}`)
        )

    .then(() => console.log('Quase Fim!'))
     
    .catch(err => console.log(`Erro Final: ${err}`))
    .then(() => console.log('Fim!'))
