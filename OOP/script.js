// Tworzenie klasy

// class Family {
//     constructor(name) {
//         this.name = name
//         this.addMemberr = function () {
//             console.log('Wywołane z instancji')
//         }
//     }
//     addMember() {
//         console.log('Wywołane z prototypu')
//     }

// }

// const savastano = new Family('Savastano')
// savastano.addMember()

// const Family2 = function (name) {
//     this.name = name
// }

// const migliaccio = new Family2('Migliaccio')
// Family2.prototype.addMember = function() {

// }


// Wyrazenie klasy

const Family2 = function () {}

function Family3() {

}

class Family4 {

}

const Family5 = class {

}

// const cutrone = new Family5()
// console.log(cutrone)

class Family {
    constructor(members, ...names) {
        this.members = members
        this.names = names
    }
    addMember(newMember) {
        this.names.push(newMember)
        this.members++
        console.log(`Został dodany nowy członek rodziny: ${newMember}. Rodzina liczy teraz ${this.members} osób`)
    }
    static makeFamily(...members) {
        return members
    }
}


const savastano = new Family(3, 'Pietro', 'Imma', 'Gennaro')
console.log(savastano)

savastano.addMember('Ciro')

const cutrone = new Family(1, 'Patrick')
console.log(cutrone)
cutrone.addMember('Patrizia')

// Metody statyczne

console.log(Family.makeFamily('Gonzalo', 'Los'))