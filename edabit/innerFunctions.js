function doProcess(a, b) {
    function displaySum() {
        alert('Sum = ' + (a + b).toString());
    }

    function displayDifference() {
        alert('Difference = ' + (a - b).toString());
    }

    displaySum();
    displayDifference();
}

doProcess(10, 20);