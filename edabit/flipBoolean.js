const reverse = x => {
    if (x === true) {
        return false;
    } else if (x === false) {
        return true;
    } else if (typeof x != 'boolean') {
        return "boolean expected";
    }
}