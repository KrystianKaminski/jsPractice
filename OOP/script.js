// Wiązanie domyślne this to obiekt globalny, 'use strict' na to nie pozwala (error/undefined)

// const thisExample = function () {
//     // 'use strict'
//     console.log(this.example, this)
//     const inside = function () {
//         console.log(this.example, this)
//     }
//     inside()
// }

// thisExample()

// wiązanie niejawne

const user = {
    age: 45,
    showName() {
        console.log(this.age)
    },
    showName2: function () {
        console.log(this.age)
    }
}

const stefano = {
    age: 20,
    showName: user.showName
}

// console.log(stefano.showName())


// wiązanie jawne : call i apply


const human = {
    pesel: 12321312312312
}

const showPesel = function () {
    console.log(`Twój pesel to: ${this.pesel}`)
}

// showPesel() // undefined
// showPesel.call(human)

const showUser = function (name) {
    console.log(`Uzytkownik ${name} ma ${this.pesel}`)
}

showUser.call(human, 'Tomasso')


// wiązanie twarde - BIND

const showPeselUser = showPesel.bind(human)

showPeselUser()