/**
 * hacer una funcion que reciba como parametro un nombre e imprime, Hola {nombre}, como estas?
 * 
 */

// let nombre = 'Francisco'

// const saludo = (() => {
//     return `Hola ${nombre} como estas?`
// })

// console.log(saludo(nombre))

//arreglo con < 5 letras y otro con > de 5 letras 
const nombres = [
    "paco",
    "Lorena",
    "Kike",
    "Abraham",
    "Cris",
    "Victor",
    "Israel",
    "Annie"
]

let lessThan = []
let moreThan= []

const mostrar = nombres.forEach((arr) => {

    if (arr.length  < 5) {
            
        lessThan.push(arr)

    } else if (arr.length > 5) {

        moreThan.push(arr)
    }


    
})

console.log(lessThan)
console.log(moreThan)
// mostrar(nombres)