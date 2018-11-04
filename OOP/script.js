const Car = function (name) {
    this.name = name
}

const maluch = new Car('maluch')
const polonez = new Car('polonez')

// 1. Nowy pusty obiekt
// 2. Następuje wiązanie this z utworzonym obiektem
// 3. Powstaje właściwość __proto__
// 4. Wywołanie funkcji i przypisanie do zmiennej

maluch.name = 'zabytek'