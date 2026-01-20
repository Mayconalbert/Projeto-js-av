console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'Bola'
console.log(obj1.name)





function obj(name) {
    this.name = name;
    this.exec = function(){
        console.log('exec...')
    }

}
const obj3 = new obj('cadeira')
const obj2 = new obj('mesa')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()