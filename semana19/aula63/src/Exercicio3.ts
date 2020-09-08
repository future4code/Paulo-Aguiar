export enum LOCATION {
  EUA,
  BRASIL
}

export enum NATIONALITY {
  AMERICAN,
  BRAZILIAN
}

export interface Casino {
  name: string,
  location: LOCATION
}

export interface User {
  name: string,
  nationality: NATIONALITY,
  age: number
}

export interface ResultItem {
  allowed: string[],
  unallowed: string[]
}

export interface Result {
  brazilians: ResultItem,
  americans: ResultItem
}

export function verifyAge(casino: Casino, users: User[]): Result {
  let braziliansNamesList: ResultItem = {
    allowed: [],
    unallowed: []
  }
  let americansNamesList: ResultItem = {
    allowed: [],
    unallowed: []
  }
  let result: Result

  if(casino.location === LOCATION.BRASIL) {
    users.map((user) => {
      if(user.age >= 18) {
        if(user.nationality === NATIONALITY.BRAZILIAN) {
          braziliansNamesList.allowed.push(user.name)
        }
        if(user.nationality === NATIONALITY.AMERICAN) {
          americansNamesList.allowed.push(user.name)
        }
      } else {
        if(user.nationality === NATIONALITY.BRAZILIAN) {
          braziliansNamesList.unallowed.push(user.name)
        }
        if(user.nationality === NATIONALITY.AMERICAN) {
          americansNamesList.unallowed.push(user.name)
        }
      }
    })
  }

  if(casino.location === LOCATION.EUA) {
    users.map((user) => {
      if(user.age >= 21) {
        if(user.nationality === NATIONALITY.BRAZILIAN) {
          braziliansNamesList.allowed.push(user.name)
        }
        if(user.nationality === NATIONALITY.AMERICAN) {
          americansNamesList.allowed.push(user.name)
        }
      } else {
        if(user.nationality === NATIONALITY.BRAZILIAN) {
          braziliansNamesList.unallowed.push(user.name)
        }
        if(user.nationality === NATIONALITY.AMERICAN) {
          americansNamesList.unallowed.push(user.name)
        }
      }
    })
  }

  return result = {
    brazilians: braziliansNamesList,
    americans: americansNamesList
  }
}