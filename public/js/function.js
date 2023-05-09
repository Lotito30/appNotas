
// Cambiar el valor del estilo "display" de los elementos "contenedor" y "formulario" para mostrar el formulario
function cambiarDisplayNuevo() {
    // Obtener los elementos "contenedor" y "formulario"
var contenedor = document.getElementById("contenedor");
var formulario = document.getElementById("formulario");

  contenedor.style.display = "none";
  formulario.style.display = "block";
}

// Cambiar el valor del estilo "display" de los elementos "contenedor" y "formulario" para ocultar el formulario
function cambiarDisplayCancelarYGuardar() {
    // Obtener los elementos "contenedor" y "formulario"
var contenedor = document.getElementById("contenedor");
var formulario = document.getElementById("formulario");

  contenedor.style.display = "block";
  formulario.style.display = "none";
}
function guardar(){
    // obtener el valor de los campos de titulo y textarea
    var titulo = document.getElementById("titulo").value
    var textarea = document.getElementById("textarea").value
    //preguntarsi desea guardar 
    if(confirm("¿Quieres guardar los cambios realizados?")){
        //Borrar div vacio
        borrarDiv()
        //crear la nota
        crearDivConDosP(titulo,textarea)
        // Cambiar de seccion
        cambiarDisplayCancelarYGuardar()
        // Borrar el contenido de los campos
        borrarCampos()
    }
}
function borrarDiv(){
    var contenedor = document.getElementById("guardada")
    var divAeliminar = document.getElementById("borrar")
    if(divAeliminar != undefined){
        contenedor.removeChild(divAeliminar)
    }
}
function crearDivConDosP(titulo,textarea){
    // Crear un nuevo elemento p1
    const p1 = document.createElement("p");
    // Agregar contenido al elemento p1
    p1.textContent = titulo;
    // Crear un nuevo elemento p2
    const p2 = document.createElement("p");
    // Agregar contenido al elemento p2
    p2.textContent = textarea;
    // Crear un nuevo div
    const nuevoDiv = document.createElement("div");
    // Agregar el primer párrafo al div como primer hijo
    nuevoDiv.prepend(p1);
    // Agregar el segundo párrafo al div como segundo hijo
    nuevoDiv.appendChild(p2);
    // Agregar el div al contenedor deseado
    const contenedor = document.getElementById("guardada");
    contenedor.appendChild(nuevoDiv);
}
function borrarCampos(){
    document.getElementById("titulo").value = ''
    document.getElementById("textarea").value = ''
}
