const funcs = []
for (let i = 0 ; i < 10 ; i ++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[3]()
funcs[1]() // Agora com o let da certo pq essa funcao tipo que tem uma memoria para ele guardar ai da  certo