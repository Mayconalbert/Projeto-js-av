const notas = [1.3, 4, 6, 8, 9]
// Sem calback 
const noatasbaixas = []
for (let i in notas){
    if (notas[i] < 7){
        noatasbaixas.push(notas[i])
    }
}
console.log(noatasbaixas)

// Com colback

const notasbaixa1 = notas.filter(function (notas){
    return notas > 7
})
console.log(notasbaixa1)

const notasbaixa2 = notas.filter(notas => notas < 7)
console.log(notasbaixa2)