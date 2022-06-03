var numero = prompt("ingrese un numero");

if (numero %2 == 0 ){
    console.log("el numero"+ numero+ "es divisible entre 2")
}
else {
    console.log("el numero"+numero+"no es divisible ")
}
//ejercicio2
var numero = prompt("ingrese un numero");

if (numero %2 == 0 ){
    alert("el numero"+numero+"es par")
}
else {
    alert("el numero"+numero+"no es par")
}
//ejercicio_3
var numero = prompt("ingrese un entre 1 y 1000");

if (numero == 1000 ){
    alert("ganaste")
}
else {
    alert("sigue participado")
}
//ejercicio 4
var numero01;
var numero02;

numero01=prompt("Ingrese el numero 1");
numero02=prompt("Ingrese el numero 2");

if(parseInt(numero01) > parseInt(numero02))
{
    alert("El numero 1 es el mayor");
}
else
{
    alert("El Numero 2 es el mayor");
}
//ejercicio 5
var numero01;
var numero02;
var numero03;

numero01=prompt("Ingrese el numero 1");
numero02 = prompt("Ingrese el numero 2");
numero03 = prompt("ingrese el numero 3");

if(parseInt(numero01) > parseInt(numero02)&& parseInt(numero01) > parseInt(numero03))
{
    alert("El numero 1 es el mayor");
}
else if(parseInt(numero02) > parseInt(numero01)&& parseInt(numero02) > parseInt(numero03))
{
    alert("El Numero 2 es el mayor");
}
else {
    alert("el numero 3 es el mayor")
}
