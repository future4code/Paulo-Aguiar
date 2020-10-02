function sum(number, index = 0) {
    if (number < 0) {
        return index;
    }
    return sum(number - 1, index + number);
}
console.log(sum(4));
