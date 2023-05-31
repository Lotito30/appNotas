
// Cambiar el valor del estilo "display" de los elementos "contenedor" y "formulario" para mostrar el formulario
function cambiarDisplayNuevo() {
    // Obtener los elementos "contenedor" y "formulario"
var contenedor = document.getElementById("contenedor");
var formulario = document.getElementById("formulario");

  contenedor.style.display = "none";
  formulario.style.display = "block";
}
function cambiarDisplayPrincipal() {
    // Obtener los elementos "contenedor" y "formulario"
var contenedor = document.getElementById("contenedor");
var formulario = document.getElementById("formulario");

  contenedor.style.display = "none";
  formulario.style.display = "block";
}
function guardar() {
    var titulo = document.getElementById("titulo").value;
    var mensaje = document.getElementById("textarea").value;
  
    var nuevoDiv = document.createElement("div");
    var tituloP = document.createElement("p");
    var mensajeP = document.createElement("p");
  
    tituloP.innerHTML = titulo;
    mensajeP.innerHTML = mensaje;
  
    nuevoDiv.appendChild(tituloP);
    nuevoDiv.appendChild(mensajeP);
  
    var guardada = document.getElementById("guardada");
    var borrar = document.getElementById("borrar");
  
    if (borrar) {
        guardada.removeChild(borrar);
      }
    
    guardada.appendChild(nuevoDiv);

    document.getElementById("titulo").value = "";
    document.getElementById("textarea").value = "";
    
    return false;
  }