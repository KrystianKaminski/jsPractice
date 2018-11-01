// Primitives vs objects


// Creating a copy
let a = 23;
let b = a;
a = 46;
console.log(a)
console.log(b)


// No copy was created
const obj1 = {
    name: 'John',
    age: '26'
}

const obj2 = obj1

obj1.age = 30
console.log(obj1.age)
console.log(obj2.age)

// Functions

let age = 27;
const obj = {
    name: 'Krystian',
    city: 'Lublin'
}

function change(a, b) {
    a = 30
    b.city = 'Warszawa'
}

change(age, obj);

console.log(age);
console.log(obj.city);