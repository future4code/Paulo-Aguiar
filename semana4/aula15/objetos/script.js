const titulo = document.getElementById('titulo')
const autor = document.getElementById('autor')
const conteudo = document.querySelector('textarea')
const paginasPosts = document.querySelector('section')

let posts = []
let i = 0
function criarPost() {
  const post = {
    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value,
  }
  posts.push(post)
  titulo.value = ""
  autor.value = ""
  conteudo.value = ""
  paginasPosts.innerHTML += 
  `<div>
    <h3>Titulo: ${posts[i].titulo}</h3>
    <h3>Autor: ${posts[i].autor}</h3>
    <p>${posts[i].conteudo}</p>
   </div>`
   i++
  console.log(posts)
  console.log(i)
}

