// this to odwołanie do obiektu

// dzięki this nie ma potrzeby uzywania osobnych funkcji dla kazdego obiektu -> mozliwosc wielokrotnego uzycia tej samej funkcji


function showName() {
    console.log(this.name)
}

const carlo = {
    name: 'Carlo',
    showName: showName
}

const angelina = {
    name: 'Angelina',
    showName: showName
}

// carlo.showName()
// angelina.showName()

// Wiązanie this powstaje w chwili wykonywania metody, nie jest zalezne od miejsca deklaracji, tylko od sposobu wywołania

// W chwili wykonywania funkcji powstaje kontekst

function one() {
    console.log(this)
    this.name = 'first'
    return this.name
}

const object1 = {
    two: one,
    four: function () {
        console.log(this)
    }
}

object1.two()

const three = object1.two

three();

const five = object1.four