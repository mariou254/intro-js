//actividad 8.2
/*  Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    * */
function countProperty(objeto) {
    let conPro = 0;
    for (const p in objeto) {
        if (objeto.hasOwnProperty(p)) {
            ++conPro;
        }
    }
    return conPro;
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    hour: "10 AM"
};

console.log(countProperty(student));