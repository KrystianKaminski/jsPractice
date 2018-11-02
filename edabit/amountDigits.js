const findDigitAmount = x => {
    if (typeof x === 'number') {
        const array = x.toString();
        return array.length;
    }
}