
const input = document.querySelector("input")
const button = document.querySelector("button")
let tarefas = document.getElementsByTagName("ul")
let listaTarefas = document.getElementsByTagName("li")
const dia = document.getElementsByTagName("select")
let numeroDeTarefas = 0

function limpar() {
  tarefas[0].innerHTML = ""
  tarefas[1].innerHTML = ""
  tarefas[2].innerHTML = ""
  tarefas[3].innerHTML = ""
  tarefas[4].innerHTML = ""
  tarefas[5].innerHTML = ""
  tarefas[6].innerHTML = ""
  numeroDeTarefas = 0
}

function riscado(i) {
  listaTarefas[i].classList.add('riscado')
}

function inserirTarefa() {
  let diaDaSemana = ""
  let tarefa = input.value
  console.log(tarefas)
  for (dias of dia) {
    diaDaSemana = dias.value
  }
  
  if(tarefa === "") {
    alert("Insira uma tarefa")
  } 
  else {   
    switch (diaDaSemana) {
      case "Segunda" :
        tarefas[0].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Terça" :
        tarefas[1].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Quarta" :
        tarefas[2].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Quinta" :
        tarefas[3].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Sexta" :
        tarefas[4].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Sábado" :
        tarefas[5].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
      case "Domingo" :
        tarefas[6].innerHTML += `<li onclick='riscado(${numeroDeTarefas})'> ${tarefa} </li>`
        input.value = ""
        break
    }
    numeroDeTarefas++
  }
}
   
  
