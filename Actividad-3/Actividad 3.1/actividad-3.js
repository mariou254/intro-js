let age = prompt ('¿Cuántos años tienes?');
var name = prompt('ingresa tu nombre');


if (age >= 18) {
    alert("puedes entrar al bar")
    
    if (name === "Mario" || name === "Carlos") {
        alert("tienes pase")
    }
}
else {
    alert("no puedes entar al bar")
}
//alert(`Tienes ${age} años!`);
var jugador_1 = prompt("elige jugador 1 piedra,papel o tijera");
var jugador_2 = prompt("elige jugador 2 piedra,papel o tijera");
if (jugador_1 === "piedra" && jugador_2 === "papel") {
    alert("jugador 1 pierde y jugador 2 gana")
}
else if (jugador_1 === "piedra" && jugador_2 === "piedra") {
    alert("empate")
}
else if (jugador_1 === "piedra" && jugador_2 === "tijera") {
    alert("jugador 1 gana y jugador 2 pierde")
}
else if (jugador_1 === "papel" && jugador_2 === "papel") {
    alert("empate")
}
else if (jugador_1 === "papel" && jugador_2 === "piedra") {
    alert("jugador 1 gana y jugador 2 pierde")
}
else if (jugador_1 === "papel" && jugador_2 === "tijera") {
    alert("jugador 1 pierde y jugador 2 gana")
}
else if (jugador_1 === "tijera" && jugador_2 === "papel") {
    alert("empate jugador 1 gana y jugador 2 pierde")
}
else if (jugador_1 === "tijera" && jugador_2 === "piedra") {
    alert("jugador 1 pierde y jugador 2 gana")
}
else if (jugador_1 === "tijera" && jugador_2 === "tijera") {
    alert("empate")
}
    
