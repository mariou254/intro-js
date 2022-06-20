/* Escribe una funcion que combine dos listas de arreglos alternando los elementos 
     * de cada una:
     * const a = [1,2,3]
     * const b = [a,b,c] */
const a = [1, 2, 3]
const b = ['a','b','c']

function print(){
    for(let i = 0; i < a.length; i ++){
        console.log(a[i] + b[i]);
    }
}

console.log(print())