// Input: array of strings ; Output: all words are exactly four letters

const returnString = array => {

    const returnArray = [];
    array.map(el => {
        if (el.length === 4) {
            returnArray.push(el);
        }
    })

    return returnArray;
}