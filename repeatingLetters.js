// Function takes a string and return string with each repeated character once

const doubleChar = string => {
    let newArray = [];
    const array = string.split('')
        .forEach((element, index, array) => {
            newArray.push(array[index] + array[index]);
        })
    return newArray.join('');
}