let pastel = {
    conseguirMasa:false,
    hornear:false,
    decorar:false
}
const comprarMasa = (pastel) => {
   return new Promise((resolve, reject) => {

        setTimeout(()=>{
            pastel.conseguirMasa = true 
            if (!pastel.conseguirMasa){
                reject (new Error ('No se consiguió la masa'))
            }else{
                resolve(pastel)
            }
        },2000)
    })  

}
const masaPastelPromesa = comprarMasa({...pastel})

masaPastelPromesa
.then((pastel) =>{
    console.log('Ya tenemos la masa', pastel)
    const hornearPastel = ((pastel) => {
        return new Promise ((resolve, reject) =>{
        
        setTimeout(()=>{
    
            pastel.hornear = true
//            console.log(pastel.hornear)//confirmo que se cambia a true el valor
            if (!pastel.hornear){
                reject(new Error('No se logró hornear'))
            }else{
                resolve(pastel)
            }
                },3000)
        })   
    })
    
    const hornearPastelPromesa = hornearPastel(pastel)
    hornearPastelPromesa
    .then((pastel)=>{
        console.log('Horneado', pastel)
        const decorarPastel = ((pastel) => {
            return new Promise ((resolve, reject)=>{
                setTimeout (()=>{
                    pastel.decorar=true
                    if (!pastel.decorar){
                        reject(new Error('El pastel no se pudo decorar'))
                    }else {
                        resolve(pastel)
                    }
                },2000)
            })
        })
        const decorarPastelPromesa =decorarPastel(pastel)

        decorarPastelPromesa
        .then((pastel)=>{
            console.log('Pastel decorado', pastel)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err) =>{
    console.log(err)
    })
})
.catch((err) => (
    console.log (err)
))

