
/* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
Ejemplo
La matriz es la lista original. Los números que faltan son
matriz = [7,2,5,3,5,3]
br = [7,2,5,4,6,3,5,3]
*/

matriz = [7,2,5,3,5,3]
br = [7, 2, 5, 4, 6, 3, 5, 3]
var i = 0;

function results() {
while(i <= 7){

    let existeMatriz = matriz.find (element => element == i);
    let existeBr = br.find(element => element == i);
if(existeMatriz != existeBr){
    console.log('No existe el numero ' + i);     
}
i++
}
}

console.log(results());