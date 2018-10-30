// Fn that takes two strings and returns number of times the first string is found in the second string


const charCount = (search, str) => {
    let count = 0;
    const searching = str.split('')
        .map((element, index, array) => {
            if (element === search) {
                return count++
            }
        });

    return count;
}