//tipo de dados booleanos

//conversao implicita
const numero = 456
const numeroString = "456"

//console.log(numero + numeroString)//ira somar os dois, mesmo sendo number e string.


console.log(numero + Number(numeroString)) //converte o tipo para number ou podemos usar String
//conversao explicita