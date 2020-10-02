function printArray(array, index = 0) {
    if (array.length === index) {
        return;
    }
    printArray(array, index + 1);
    console.log(array[index]);
}
printArray([1, 3, 2, 6]);
