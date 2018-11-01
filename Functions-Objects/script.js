// BIND CALL AND APPLY

const john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay} ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`)
        } else if (style === 'friendly') {
            console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`)
        }
    }
}

const emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon')

john.presentation.apply(emily, ['friendly', 'afternoon'])

const johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('morning')
johnFriendly('night')

const emilyFormal = john.presentation.bind(emily, 'formal')

emilyFormal('morning')
emilyFormal('noon')

const years = [1990, 1965, 1937, 2005, 1998]

const arrayCalc = (array, fn) => {
    const arrRes = [];
    for (let i = 0; i < array.length; i++) {
        arrRes.push(fn(array[i]))
    }
    return arrRes;
}

const calculateAge = element => 2018 - element;
const isFullAge = (limit, element) => element >= limit

const ages = arrayCalc(years, calculateAge)
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)