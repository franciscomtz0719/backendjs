
const nombres = [
    "Paco",
    "Lorena",
    "Kike",
    "Abraham",
    "Cris",
    "Victor",
    "Marco",
    "Israel",
    "Annie",
    "Ërnesto",
    "Francisco",
    "Lenny",
    "Rod",
    "Noemi",
    "Benjamin",
];

let strNombre= ""

    if (process.argv[2] !== undefined ){
        console.log(process.argv)
        strNombre = process.argv[2]
}

const buscador = nombres.filter(nombres => nombres === strNombre)

if (buscador.length >= 1){
    console.log (`Bienvenido ${buscador}`)
}else{
    console.log (`no existe`)
}
