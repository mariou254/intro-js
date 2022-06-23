let ingreso =document.querySelector('#btnIngresar')
ingreso.addEventListener('click',iniciarSession);
function iniciarSession(){
    var correo=''
    var contra=''
    var acceso=false;
    correo=document.querySelector('#user').value
    contra=document.querySelector('#txtContra').vaule
    acceso=validar(correo,contra)
    console.log(acceso)
}