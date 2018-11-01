// Object.create

const personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth)
    }
}

const john = Object.create(personProto);
console.log(john);

john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

console.log(john)

const jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        value: 'designer'
    }
})

console.log(jane)