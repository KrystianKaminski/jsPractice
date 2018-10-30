// Write a fn that takes four string arguments
// Comparing first string to the three next
// Verify if the first string starts with the second str etc.

const verifySubstrs = (str1, str2, str3, str4) => {
    const returnStr = [str2, str3, str4].join('');
    let string;
    if (str1.startsWith(str2) && str1.includes(str3) && str1.endsWith(str4)) {
        string = 'My head, body, and tail.'
    } else {
        string = 'Incomplete.'
    }

    return string;
}