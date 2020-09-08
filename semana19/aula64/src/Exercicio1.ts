export interface Character {
  name: string,
  hp: number,
  armor: number,
  attack: number
}

export function validateCharacter(character: Character): boolean {
  let characterPass = true
  if(!character.name || !character.hp || !character.armor || !character.attack) {
    characterPass = false
  }
  if(character.hp === 0 || character.armor === 0 || character.attack === 0) {
    characterPass = true
  }
  if(character.hp < 0 || character.armor < 0 || character.attack < 0) {
    characterPass = false
  }
  return characterPass
}