//actividad7.1
function identified(phrase, word) {
    var arr = phrase.split(' ');
    var exist = false;

    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == word){
            exist = true;
        }else{
            exist = false;
        }
    }

    return exist
}

identified("hola mundo", 'perro');

//ejercio 7.2
const numbers = [1, 2, 3, 4, 10, 11];

function operacion(arr){
    let suma = 0;
    for(let i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma;
}

operacion(numbers)
//ejercicio 7.3
function palindromo(texto) {
    let array = texto.split("")
    let reverse = array.reverse()
    let join = reverse.join("")
    return texto == join
    
}
console.log(palindromo("madam"))
console.log(palindromo("computadora"))
//actividad 7.4
function celcius(temp) {
    let cel = temp * 9 / 5.0 + 32;
    return cel;
}
function farenheight(temp) {
    let far = (temp - 32) * 5 / 9
    return far;
    
}
console.log(farenheight(60))
console.log(celcius(60))