import {v4} from "uuid"

export default class generateId {
  public createNewId(): string {
    return v4()
  }
}