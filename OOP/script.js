// Prototype

const Person = function (name, age) {
    this.name = name
    this.age = age
    this.children = []
    // this.addChildren = function (name) {
    //     this.children.push(name)
    // }
}

Person.prototype.addChildren = function (name) {
    this.children.push(name)
}


const filippo = new Person('Filippo', 20)
const monica = new Person('Monica', 30)

filippo.addChildren('Giorgio')
monica.addChildren('Maria')