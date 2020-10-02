function printArray(array: any[], index: number = 0): any {
  if(array.length === index) {
    return
  }
  console.log(array[index])
  printArray(array, index + 1)
}

printArray([1, 3, 2, 6])