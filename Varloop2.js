const funct = []
for (var i =0; i < 10; i ++){
    funct.push(function(){
        console.log(i)
    })
}
funct[2] ()
funct[8] ()// Os resultados serao 10 pq o var nao  tem escopo de bloco e sim de funcao e o loop acaba com o valor 10