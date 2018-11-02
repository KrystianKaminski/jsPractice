const multiplyByLength = array => {

    const length = array.length;
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * length);
    }

    return newArray;

}