// Input: array with positive numbers and strings

// Output: new array without strings

const filterOutStrings = array => {

    const numbers = [];

    array.map(el => {
        if (typeof el === 'number') {
            numbers.push(el);
        }
    });

    return numbers;
}