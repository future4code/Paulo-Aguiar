function compressWord(word: string) {

  let lastLetter = ''
  let letterCount = 1
  let newLetter = []
  let wordArray = word.split('')
  for(let i=0; i<wordArray.length; i++) {
    if(wordArray[i] == lastLetter) {
      letterCount++
    } else {
      newLetter.push(wordArray[i])
    }

    lastLetter = wordArray[i]

    if(wordArray[i+1] !== lastLetter) {
      newLetter.push(letterCount)
      letterCount = 1
    }
  }
  
  if(newLetter.join('').length > word.length) {
    return word
  }

  return newLetter.join('')
}

console.log(compressWord("baaaaaaaaannana"))