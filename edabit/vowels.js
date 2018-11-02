// Input: String

// Output: numbers of vowels contained within it

const vowels = string => {

    const array = string.toLowerCase().split('');
    let vowelsSum = 0;

    array.map(el => {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            vowelsSum++;
        }
    });

    return vowelsSum
}