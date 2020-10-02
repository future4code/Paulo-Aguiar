### Exercício 1
```Javascript
const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
```
A complexidade é O(n), pois ele depende de uma string que pode ser de n tamanho e aumenta linearmente de 1 em 1.

### Exercício 2
```Javascript
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```
A complexidade é O(n), pois ele depende de uma string que pode ser de n tamanho e aumenta linearmente de 1 em 1.

### Exercício 3
```Javascript
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
A complexidade é O(1), pois o tempo de resolução do algoritmo não depende do tamanho da entrada da entrada.

### Exercício 4
```Javascript
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```
A complexidade do algoritmo é O(n²), pois temos uma iteração com o for e outra iteração dentro dele com o indexOf

### Exercício 5
Em ordem de eficiência, temos:
O(1), O(n) e O(n²)