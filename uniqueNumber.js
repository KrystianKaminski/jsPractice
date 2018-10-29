// Create a function that takes an array of numbers and return the number that's unique.

const unique = array => {
    const uniqueNumber = [];
    array.map((element) => {
        let el = array[0];
        console.log(el);
        if (el !== element) {
            uniqueNumber.push(element);
        }
    });
    return Number(uniqueNumber) || 0;

}