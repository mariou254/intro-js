const boton_agregar = document.getElementById("agregar_tarea")
const boton_tarea = document.querySelector(".lista-tarea")
const boton_borrar = document.querySelector(".limpiar-tarea")
//agregar  tareas
boton_agregar.addEventListener('click', () => {
    agregarTarea("")
    
})
//quitar tareas
boton_borrar.addEventListener('click', () => {
    
})
//editar tareas
boton_tarea.addEventListener('click', () => {
    
})
//boton agregar
boton_tarea.addEventListener('keypress', ()=>{
    
})
var arregloTareas = [];//variable para almacenar los datos
var contador = 0;//variable para acomodar los datos
const getContador = () => {
    const cont = localStorage.getItem("contador");
    return cont;
} 
const setContador = () => {
    localStorage.setItem("contador",contador);
    
}
const inicioContador = () => {
    if (getContador() != null) {
        contador=getContador()
    }
}
const getArregloTareas = () => {
    setContador()
    const arreglo = JSON.parse(localStorage.getItem("arregloTareas"));
    return arreglo;
}
const setArregloTareas = () => {
    localStorage.setItem("arregloTareas", JSON.stringify(arregloTareas));
    listarTarea()
    
}
const agregarTarea = (descripcion) => {
    contador++
    let objTarea = {
        id: contador,
        descripcion: descripcion
    }
    if (getArregloTareas() != null) {
        arregloTareas = getArregloTareas();
    }
    arregloTareas.push(objTarea)
    setArregloTareas()//funcion para localizar el local storage

}
const listarTarea=()=> {
    boton_tarea.innerHTML = ""
    let datos=getArregloTareas()
    if (datos != null) {
        for (const tarea of getArregloTareas()) {
        boton_tarea.innerHTML += `
        <li id="$(tarea.id)">
                <input type="text" class="input-tarea" value="$(tarea.descripcion)">
                <button class="eliminar tarea bg-danger">x</button>
        </li>
        `
    }
    } 
}

listarTarea()
inicioContador()