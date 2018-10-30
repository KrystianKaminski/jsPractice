const sortByLast = string => {
    const array = string
        .split(' ')
        .sort((a, b) => a[a.length - 1] > b[b.length - 1]);
    return array.join(' ');
}