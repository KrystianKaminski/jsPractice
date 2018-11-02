// Create a function that takes an array of strigns and return an array, sorted from shortest to longest

const sortByLength = array => {
    const sBLength = array.sort((a, b) => {
        return a.length > b.length;
    })
    return sBLength;
}