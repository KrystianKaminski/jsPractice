// Fn takes a string and returns a new string with all vowels removed

const silenceTrump = string => {
    const regex = /a|e|i|o|u/gi
    let newString = string.replace(regex, '');
    return newString;
}