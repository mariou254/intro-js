/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
myObjeto = {
    myfunction:function(){

    Object.defineProperties(this, {
        color: {
            value: 'green',
            writable: false,
            enumerable:true
        }, size: {
            value:"large",
            writable: false,
            enumerable:true
        }, height: {
            value: "120kg",
            writable: false,
            enumerable:true
    
        }, numbers: {
            value: "180 unidades",
            writable: false,
            enumerable:true
    
        }
    })
    }
}
myObjeto.myfunction()
console.log(myObjeto)