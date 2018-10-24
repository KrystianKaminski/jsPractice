const Go = num => {
    let a = [];
    if (num >= 1 && num <= 60) {
        for (let i = 1; i <= num; i++) {
            a.push('-');
        }
    }
    let result = a.join('');
    return result;
}