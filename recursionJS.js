// count down

let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
}

countDownFrom(10)


// count up
let countUpTo = num => {

    const limit = 30;

    if (num === limit) return;
    console.log(num);
    countUpTo(num + 1);

}

countUpTo(5);