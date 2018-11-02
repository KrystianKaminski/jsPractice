// finding the smallest and biggest numbers

const smallAngBig = array => {

    const sortedArray = array.sort((a, b) => {
        return a > b;
    });
    const lastElement = sortedArray[sortedArray.length - 1];
    const returnArray = [sortedArray[0], lastElement]
    return returnArray;
}