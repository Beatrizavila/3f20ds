const matriz = [
    [0, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 0],
  ];
  const isConnected = (matriz) => {
    const filas = [];
    for (let i = 0; i < matriz.length; i++) {
      filas[i] = matriz[i].some((m) => m === 1);
    }
    if(filas.every((f) => f)){
      const columnas = [];
      for(let i = 0; i < matriz.length; i++){
        const columnas2 = [];
        for(let j=0; j < matriz.length; j++){
          columnas2[j] = matriz[j][i]
        }
        columnas[i] = columnas2.some((m) => m === 1);
      }
      return columnas.every((f) => f)
    }
    return false
  };

  
  console.log("¿La matriz esta conectada? " + (isConnected(matriz)? "si" : "no"));