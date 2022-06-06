//ejercicio 5
let num = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for (let i = 0; i < num.length; i++){
    if (num[i]>3) {
        console.log(num[i])
    }
}
//ejercicio 5.2 
let esp = [];
let contador=1;
while (contador <= 5) {
    esp.push(contador);
    contador++;
    
}
console.log(esp);
//ejercicio 5.3

let vacio = [];
let cont=1;
while (cont <= 5) {
    let agregar=(prompt("ingrese un numero"));
    vacio.push(agregar);
    cont++;
    
}
vacio.sort(comparacion)
function comparacion(a,b){
    return a-b
}
console.log(vacio);