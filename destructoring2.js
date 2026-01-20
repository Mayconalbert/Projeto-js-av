const [a] = [10]

const [n1, , n3, , n5, n6 =10] = [10,11,7,8]
console.log(a, n1,  n3, n5,n6)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)