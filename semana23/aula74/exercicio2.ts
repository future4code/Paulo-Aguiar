function sum(number: number, index: number = 0): any {
  if(number < 0) {
    return index
  }
 return sum(number - 1, index + number)
}

console.log(sum(4))