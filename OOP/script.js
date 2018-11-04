// KLASY I DZIEDZICZENIE

// Klasy nadrzędne (superclass), klasy pochodne, podrzędne (subclassy) i dziedziczenie



// 1. Zbudowanie prototypu klasy dziedziczącej w oparciu o klasę po której dziedziczy (powstaje łańcuch prototypów)
// 2. Wywołanie konstruktora klasy(klas) nadrzędnych


// Słowo kluczowe extends - wskazanie klasy po której nowa klasa ma dziedziczyć

// Słowo kluczowe super - słuzy do rozszerzenia konstruktora nowej klasy o konstruktor klasy z której dziedziczy

class Animal {
    constructor(age, name) {
        this.age = age
        this.name = name
    }
    breath() {
        console.log('Animal breaths')
    }
}

const zwierze = new Animal(2, 'Paolo')
zwierze.__proto__ === Animal.prototype

class Mammal extends Animal {
    constructor(age, name, hairs) {
        super(age, name) // wywołujemy konstruktor klasy nadrzędnej
        this.hairs = hairs
    }
    drinkMilk() {
        console.log('Mammals drinks milk')
    }
    speak() {
        console.log('sdasdasda')
    }
}

const ssak = new Mammal(3, 'Max', 'blond')
ssak.breath()
ssak.drinkMilk()

class Human extends Mammal {
    constructor(age, name, hairs, language) {
        super(age, name, hairs)
        this.language = language
    }
    speak() {
        console.log('Human speaks')
    }
}

const człowiek = new Human(30, 'Marco', 'Dark', 'Italian')