// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
const numbers = [1, -4, 12, 0, -3, 29, -150];
let suma = 0
const sumaArray = (numbers) => {
    for (i = 0; i < numbers.length; i++) {
        if(numbers[i]>0){
            suma += numbers[i]
        }
    }
    return suma
}

console.log(sumaArray(numbers));
