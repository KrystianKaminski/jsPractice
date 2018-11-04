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

// CZYM JEST PROTOTYP

// Prototyp to obiekt w funkcji konstruktora, współdzielony przez wszystkie egzemplarze.
// Kazdy egzemplarz ma dostęp do obiektu prototypu

// CO ZAWIERA PROTOTYP? 

// Domyślnie właściwość constructor (funkcja konstruktora lub klasa) + to co zostanie przypisane do prototypu

function Player() {

}

class User {

}

Player.prototype.age = 25
const leonardo = new Player
const gonzalo = new User

console.log(leonardo.constructor)
console.log(gonzalo.constructor)

const alessio = new leonardo.constructor()

// DODANIE ELEMENTÓW DO PROTOTYPU (KONSTRUKTOR)

function Citizen(country, citizenship) {
    this.country = country
    this.citizenship = citizenship
    // this.changeCitizenship = function (citizenship) {
    //     this.citizenship = citizenship
    //     console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
    // }
}

Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship
    console.log(`Zmiana za pomocą metody w prototypie na obywatelstwo ${this.citizenship}`)
}

// this nabiera znaczenia w momencie kiedy jest wywoływane

const alex = new Citizen('Polska', 'polskie')
const franco = new Citizen('France', 'german')
alex.changeCitizenship('italian')

console.log(franco.toString())

// Prototyp zawsze aktualny (referencja)
console.log(alex.age) // undefined
Citizen.prototype.age = 21
console.log(alex.age) // 21

// Przysłanianie metod

// Rozszerzanie prototypu wbudowanych konstruktorów

const arr = [5, 6, 7, 8]
Array.prototype.delete = function (index) {
    return this.splice(index, 1)
}

arr.delete(1)