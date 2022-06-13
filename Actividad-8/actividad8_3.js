//actividad 8.3
/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    
};
let propiedad = "name" in student;
console.log(propiedad)