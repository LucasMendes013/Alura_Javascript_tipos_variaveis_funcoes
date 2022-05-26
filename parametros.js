//parametros de funcao

function somar(primeiroNumero, segundoNumero){
    return primeiroNumero + segundoNumero
}

console.log(somar(1, 2))
console.log(somar(10000, .2))
console.log(somar(-2001, 1222))
console.log(somar(10.2222, .2))

//parametros x argumentos

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40, 'juliana'))

function multiplica(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplica(somar(4, 5), somar(3, 3)))