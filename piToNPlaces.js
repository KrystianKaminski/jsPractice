// Input: given a number N

// Output: PI to N decimal places

const piDecimal = num => {
    const pi = Math.PI;
    const ret = Number.parseFloat(pi).toFixed(num);
    return Number(ret);
}