const addUp = x => {

    if (x >= 1 && x <= 1000) {
        let sum = 0;

        for (let i = 1; i <= x; i++) {
            sum += i;
        }
        return sum;
    }
}