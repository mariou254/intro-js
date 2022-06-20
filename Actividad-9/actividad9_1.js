/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12];
function numeros(){
    order = arr.sort(function (a, b) {
        return a - b
    });
    
    console.log(order[1],order.slice(-2,order.length-1));
    
    
}
numeros();