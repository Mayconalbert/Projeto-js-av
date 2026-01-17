const valores = [ 7.7, 8.9,6.3, 9.2]
console.log(valores)
console.log(valores[2], valores[1])
valores[3] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
console.log(typeof valores)
console.log(valores)
delete valores[1]
console.log(valores)