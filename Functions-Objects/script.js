// Functions returning functions


const interviewQuestion = job => {
    if (job === 'designer') {
        return name =>
            console.log(`${name}, can you please explain what UX design is?`);

    } else if (job === 'teacher') {
        return name =>
            console.log(`What subject do you teach, ${name}?`)

    } else {
        return name =>
            console.log(`Hello ${name}, what do you do?`)

    }
}

const teacherQuestion = interviewQuestion('teacher')
const designerQuestion = interviewQuestion('designer')

teacherQuestion('John')
designerQuestion('Krystian')
designerQuestion('Mark')
designerQuestion('Mike')

interviewQuestion('teacher')('Krystian')