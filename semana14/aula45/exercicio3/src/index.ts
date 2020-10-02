import * as fs from 'fs'

const listaTarefas: string = "src/" + process.argv[2]
const novaTarefa: string = '\n' + process.argv[3]
fs.appendFileSync(listaTarefas, novaTarefa) 