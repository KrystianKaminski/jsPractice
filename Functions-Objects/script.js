// CLOSURES

const retirement = retirementAge => {
    return yearOfBirth => {
        const a = ' years left until retirement'
        const age = 2018 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

const retirementUS = retirement(66);
const retirementGermany = retirement(65)
const retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990)
retirementIceland(1990)
// retirement(66)(1990);

const interviewQuestion = job => {
    return name => {
        if (job === 'designer') {
            console.log(`${name}, can you please explain what UX design is?`);
        } else if (job === 'teacher') {
            console.log(`What subject do you teach, ${name}?`)

        } else {
            console.log(`Hello ${name}, what do you do?`)

        }
    }
}

interviewQuestion('teacher')('Krystian')