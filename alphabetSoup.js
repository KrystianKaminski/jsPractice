const alphabetSoup = x => {
    let result = x.toLowerCase().split('');

    let correctResult = result.sort(function (a, b) {
        return a < b ? -1 : 1;
    })
    return correctResult.join('');
}