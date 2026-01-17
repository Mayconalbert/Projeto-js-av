console.log('1)', '1' == 1)
console.log('2)', '1' === 1) //estritamente igual 
console.log('3)', '3' != 3) //diferente
console.log('4)', '3' !== 3) //estritamente diferentew
console.log('5)', 3 < 2) //menor
console.log('6 )', 3 > 2) //maior
console.log('7)', 3 <= 2) //menor ou igual
console.log('8)',3 >= 2) //maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
//nsole.log('12)', d1.getTime() == d2.getTime))