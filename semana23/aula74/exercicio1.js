//a)--------------------------------
// function showIntegers(number: number): number {
//   if(number < 0) {
//     return number
//   }
//   showIntegers(number - 1)
//   console.log(number)
// }
// showIntegers(5)
//b)-------------------------------------
function showIntegers(number) {
    if (number < 0) {
        return number;
    }
    console.log(number);
    showIntegers(number - 1);
}
showIntegers(5);
