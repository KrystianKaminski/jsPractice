const reverse = x => {

    const array = x.split('');
    const arrayReverse = array.reverse();
    const string = arrayReverse.join('');
    return string;
}