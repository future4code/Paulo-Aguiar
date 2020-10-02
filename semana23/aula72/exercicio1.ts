function isOneEdit(word: string, editedWord: string): boolean {

  if(editedWord.length > word.length + 1 || editedWord.length < word.length - 1) {
    return false
  }

  let numberOfChanges = 0

  for(const letter of editedWord) {
    if(word.indexOf(letter) == -1) {
      numberOfChanges++
    }
  }
  if(numberOfChanges > 1) {
    return false
  }

  return true
}

console.log(isOneEdit("banana", "benana"))