const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthName = x => {
    if (x >= 0 && x <= 12) return months[x - 1];
}