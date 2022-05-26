const texto1 = 'ola mundo'
const texto2 = 'ola, mundo! 121313'
const citacao = "ola mundo 'ola'"

//somando apenas string com string as frases se juntam
const operacaoString = citacao + texto1
console.log(operacaoString)

//podemos guardar nas variaveis, simbolos também
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//para padronizar uma comparação entre strings: (o js não entende que minusculas e maiusculas nao diferem tanto)
// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false

//Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//para contar quantos caracteres temos naquela string, podemos usar o length
const senha = "senha1234"
console.log(senha.length)
