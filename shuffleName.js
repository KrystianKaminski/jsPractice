const nameShuffle = x => {

    const array = x.split(' ');
    const reverse = array.reverse();
    const reverseString = reverse.join(' ');
    return reverseString;
}