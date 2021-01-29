const matriz = [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
];

const isDigraph = (matriz) => {
    for(let i = 0; i < matriz.length; i++){
        for(let j=0; j < matriz.length; j++){
            if (matriz[j][i] !== matriz[i][j]){
                return true;
            }
        }
    }
    return false;
}
 console.log("¿Es dirigido? " + (isDigraph(matriz)? "si" : "no"));

