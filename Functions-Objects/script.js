// Passing functions as arguments

const years = [1990, 1965, 1937, 2005, 1998]

const arrayCalc = (array, fn) => {
    const arrRes = [];
    for (let i = 0; i < array.length; i++) {
        arrRes.push(fn(array[i]))
    }
    return arrRes;
}

const calculateAge = element => 2018 - element;
const isFullAge = element => element >= 18
const maxHeartRate = element => {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element))
    } else {
        return 'You are too old or too young, sorry'
    }
}

const ages = arrayCalc(years, calculateAge)
const isFullAges = arrayCalc(ages, isFullAge)
const maximumHeartRate = arrayCalc(ages, maxHeartRate)

console.log(ages)
console.log(isFullAges)
console.log(maximumHeartRate)