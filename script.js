//var
//quando usamos var, podemos reestipular seu valor durante o codigo, poder primeiro atribuir um valor a ela e depois declara-la, como vemos na linha 6 e 8

// var altura = 5
// var comprimento = 5

// area = altura * comprimento
// console.log(area)
// var area


//let, não é tão livre quanto a var, mas ainda tem suas atribuições diversas. A let permite que troquemos o valor dela porem tem que ser declarado antes
// let forma = 'retangulo'
// let altura = 5
// let comprimento = 5
// let area

// if(forma === 'retangulo'){
//     area = altura * comprimento
// } else {
//     area = (altura * comprimento) / 2
// }


// console.log(area)



//const, não é livre como as outras variaveis, ela não pode ser declarada sem nenhum valor atribuido e não pode ter um valor reestipulado

const forma = 'quadrado'
const altura = 5
const comprimento = 7
const area;

if(forma === 'retangulo'){
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}


console.log(area)