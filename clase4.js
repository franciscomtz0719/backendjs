/**
 * 
 * Callbacks
 */
 const muro = {
    estaConstruido:false, // Paso 1
    estaAplanado:false, // Paso 2
    estaPintado:false // Paso 3
  }
  
  // function construir(muroAConstruir) {
  //   muroAConstruir.estaConstruido = true
  //   return muroAConstruir
  // }
  
  // function aplanar(muroAAplanar) {
  //   muroAAplanar.estaAplanado = true
  //   return muroAAplanar
  // }
  
  // function pintar(muroAPintar) {
  //   muroAPintar.estaPintado = true
  //   return muroAPintar
  // }
  
  // -> Referencia
  // -> Valor
  // construir(muro) // -> Spread operator : copy
  // console.log("muro", muro)
  // const muroAplanado = aplanar(muroConstruido)
  // const muroPintado = pintar(muroAplanado)
  
  
  // setTimeout -> simular asincronia
  
  /*
  * Paso 1 -> Construir
  * Paso 2 -> Aplanar
  * Paso 3 -> Pintar
  */
  
//   setTimeout(() => {
//     console.log("apenaaaas voy a construir")
//     construir({...muro}, aplanar)
//   }, 3000)
  
//   const aplanar = (muroAAplanar, pintar) => {
//     muroAAplanar.estaAplanado = true // -> Paso 2
//     pintar(muroAAplanar)
//   }
//   console.log("ya se declaro aplanar")
  
//   const pintar = (muroAPintar) => {
//     muroAPintar.estaPintado = true
//     console.log("exito", muroAPintar)
//   }
//   console.log("ya se declaro pintar")
  
//   const construir = (muroAConstruir, aplanar) => {
//     let error = null
//     muroAConstruir.estaConstruido = true // -> Paso 1
//     if(!muroAConstruir.estaConstruido) {
//       error = "El muro no fue construido"
//       console.log("error", error)
//       return
//     } 
//     aplanar(muroAConstruir, pintar) // -> izq: el resultado del paso pasado, der: la declaracion del paso que sigue
//   }
//   console.log("ya se declaro construit")

  // Despues
  // Ese mismo muro, lo necesito aplanar
  let pastel = {
    conseguirMasa:false,
    hornear:false,
    decorar:false
}

  setTimeout(() => {
    console.log("Vamos a conseguir la masa")
    hacerMasa({...pastel}, hornear)
  }, 3000)


const hornear = (pastelAHornear, decorarPastel ) => {
    let error = null
    pastelAHornear.hornear = true

    if (!pastelAHornear.hornear) {
        error = 'El pastel no fue horneado'
        console.log('Error', error)
        return
    }
    decorarPastel(pastelAHornear)

}

const decorar = (pastelADecorar) => {

    let error = null
    pastelADecorar.decorar = true

    if (!pastelADecorar.decorar) {
        error = 'el pastel no se puede decorar'
        console.log('Error', error)
        return
    }
    console.log('Exito Terminaste tu pastel', pastelADecorar)

}

const hacerMasa = (masaPastel, hornear) => {

    let error = null
    masaPastel.conseguirMasa = true

    if (!masaPastel.conseguirMasa) {
        error = 'No conseguimos la masa'
        console.log('Error', error)
        return
    }

    hornear(masaPastel, decorar)
}
console.log('Terminamos')


