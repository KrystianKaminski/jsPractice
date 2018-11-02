const findLargestNum = array => {

    let sorting = array.sort(function (a, b) {
        return a < b;
    });

    return sorting[0];

}

console.log(findLargestNum([4, 5, 1, 3]));