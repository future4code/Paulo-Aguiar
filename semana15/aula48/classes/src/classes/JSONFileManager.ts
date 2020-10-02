import * as fs from 'fs'

export default class JSONFileManager {
  private fileName: string

  constructor(
    fileName: string
  ) {
    this.fileName = fileName
  }

  public getObjectFromFile(): any {
    try {
      const fileData = fs.readFileSync(this.fileName).toString()
      return JSON.parse(fileData)
    } catch (error) {
      console.log('ocorreu um erro ao ler o arquivo: ' + error.message)
      return []
    }
  }

  public writeObjectToFile(data: any): void {
    try {
     const dataAsString: string =  JSON.stringify(data, null, 2)
     fs.writeFileSync(this.fileName, dataAsString)
     console.log('base de dados atualizada')
    } catch (error) {
      console.log('ocorreu um erro ao atualizar a base de dados: ' + error.message)
    }
  }
}