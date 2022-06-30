// /**
//  * hacer una funcion que reciba como parametro un nombre e imprime, Hola {nombre}, como estas?
//  * 
//  */

// // let nombre = 'Francisco'

// // const saludo = (() => {
// //     return `Hola ${nombre} como estas?`
// // })

// // console.log(saludo(nombre))

// //arreglo con < 5 letras y otro con > de 5 letras 
// const nombres = [
//     "paco",
//     "Lorena",
//     "Kike",
//     "Abraham",
//     "Cris",
//     "Victor",
//     "Israel",
//     "Annie"
// ]

// let lessThan = []
// let moreThan= []

// const mostrar = nombres.forEach((arr) => {

//     if (arr.length  < 5) {
            
//         lessThan.push(arr)

//     } else if (arr.length > 5) {

//         moreThan.push(arr)
//     }


    
// })

// console.log(lessThan)
// console.log(moreThan)
// // mostrar(nombres)

// let colors = require('colors')

// console.log( `Hola me llamo ${process.argv[2]}`.rainbow)

const fs = require('fs')

// fs.readFile('hola.txt', 'utf8', (err, data) => {

//     if (err) throw err
//     console.log (data)

// })

// fs.writeFile('fsMkdirExample/ejemplo3.txt', 'contenido de ejemplo', 'utf8',(err) => {
//     if (err) {
//         console.log (`hay un error ${err}`)
//         return
//     }
// })

function deleteErr (err) {

    if (err) {
        console.log (`hay un error ${err}`)
        return
}
        console.log ('borrado con exito')

}

// fs.unlink('ejemplo.txt', deleteErr)

// function createDirErr (err) {

//     if (err) {
//         console.log (`hay un error ${err}`)
//         return
// }
//         console.log ('Directorio creado con exito')

// fs.rmdir('fsMkdirExample2', deleteErr )
fs.rmdir('fsMkdirExample', {recursive: true} , deleteErr)