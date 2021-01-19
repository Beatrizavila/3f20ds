función mergeSort(arr) {
    Si la cantidad de posiciones del array es menor a 2 regresa el valor declarado
    si (arr. longitud < 2) {
        devolución;
    }
    Si no, se declaran los pasos que se hace por ciclo y las pocisiones en las que se moverán
    var paso 1 ; 
    var izquierda, derecha;
    
    Mientras la cantidad de pasos sea menor a la cantidad de elementos del array
    while (step < arr. longitud) {
        izquierda 0 ; 
        derecha - paso;
    
        Mientras la posición derecha más la posición sea menor a igual a la cantidad de elementos del array
        while (derecha + paso <arr . longitud) {
            mergeArrays(arr, izquierda, izquierda+paso, derecha, derecha+paso);
            izquierda - derecha + paso;
            derecha a la izquierda + paso;
        }
    
        si (derecho < arr. longitud) {
        mergeArrays(arr, izquierda, izquierda+paso, derecha, arr. longitud);
        }

    paso *o 2;
    }
}

Función para agrupar los elementos del array recursivamente
función mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr á new Array(stopRight - startRight + 1);
    var leftArr á nueva matriz(stopLeft - startLeft + 1);
    
    Elemento de la derecha
    k - startRight;
    para (var i á 0; i < (rightArr. longitud-1); ++i) {
        rightArr[i] á arr[k];
        ++K;
    }
    
    Elemento de la izquierda
    k - startLeft;
    para (var i á 0; i < (leftArr. longitud-1); ++i) {
        leftArr[i] á arr[k];
        ++K;
    }

    rightArr[rightArr. longitud-1] - Infinito; // valor del centinela
    leftArr[leftArr. longitud-1] - Infinito; // valor del centinela
    
    var m a 0;
    var n a 0;
    Ciclo para calcular si el elemento se moverá o no
    para (var k á startLeft; k < stopRight; ++k) {
        si (leftArr[m] <- rightArr[n]) {
        arr[k] á leftArr[m];
        M++;
        }
        Más {
        arr[k] - rightArr[n];
        N++;
        }
    }
    Mostrar el procedimiento 
    consola. log("left array - ", leftArr);
    consola. log("array right array - ", rightArr);
    }

    var nums  [6,10,1,9,4,8,2,7,3,5]; //Se llenan los elementos del array
    consola. log(nums);
    consola. registro();
    mergeSort(nums);
    consola. registro();
    consola. log(nums);

    Valor esperado [1,2,3,4,5,6,7,8,9,10]