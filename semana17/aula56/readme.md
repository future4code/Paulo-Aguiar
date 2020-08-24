### Exercício 1
a) O número de rounds determina o tempo necessário para decriptar a informação, quanto mais rounds mais difícil fica para a informação ser decriptada por força bruta. O salt é uma string gerada automaticamente pelo bcrypt através da senha e incluído na string resultante de todo processo do bcrypt. Utilizei 6 rounds porque é apenas um exercício, normalmente utilizaria 12 porque parece ser o mais utilizado.

### Exercício 2
a) O cadastro, pois é ele que vai armazenar a senha tratada pelo bcrypt, ao invés de armazenar a senha original.

d) Não precisamos modificar este endpoint, pois ele usa o token para devolver os dados de um usuário, e não a senha.

### Exercício 3
