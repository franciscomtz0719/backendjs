const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  // Declarando
  const construir = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.construido = true
        // Ya se resolvio mi promesa
        if(muro.construido){
          resolve(muro) // -> me ahorro return, es un return -> then recibe esto
        }else {
          reject(new Error("No se pudo construit")) // catch recibe esto
        }
      }, 3000)
    })
  }
  
  const muroConstruidoPromesa = construir({...muro})
  
  console.log("antes del then y catch", muroConstruidoPromesa)