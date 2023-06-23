let cambiarColor = {
  blanco: function (elemento) {
    elemento.style.color = "#fff";
    elemento.style.borderColor = "#fff";
  },
  negro: function (elemento) {
    elemento.style.color = "#666";
    elemento.style.borderColor = "#000";
  },
};

function cambiarColorCuerpo(color) {
  let contenido = document.querySelectorAll(
    ".faq,#contenedor h3,#guardada div,#guardada div h2,#guardada div p"
  );

  let centro = document.querySelector(".centro");

  centro.style.backgroundColor = color;

  if (color === "blue" || color === "red") {
    contenido.forEach(cambiarColor.blanco);
  } else {
    contenido.forEach(cambiarColor.negro);
  }
}

function focus() {
  const inputFocus = document.getElementById("titulo");
  inputFocus.focus();
  inputFocus.setSelectionRange(
    inputFocus.value.length,
    inputFocus.value.length
  );
}

// Inicio de sesion

function inicio() {
  // funcion para que los label se queden arriba cuando haya caracteres dentro del input
  const inputs = document.querySelectorAll(".absolute input");
  inputs.forEach((input) => {
    const label = input.nextElementSibling;
    input.addEventListener("input", () => {
      if (input.value !== "") {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    });
  });

  // funcion para cambiar displayen inicio de sesion
  var inicio = document.getElementById("iniciarSesion");
  var recuperarContrasena = document.getElementById("recuperarContrasena");
  var registrarse = document.getElementById("registrarse");

  var recuperar = document.getElementById("recuperar");
  recuperar.addEventListener("click", function (event) {
    event.preventDefault();
    inicio.style.display = "none";
    recuperarContrasena.style.display = "block";
  });

  var registrar = document.getElementById("registrar");
  registrar.addEventListener("click", function (event) {
    event.preventDefault();
    inicio.style.display = "none";
    registrarse.style.display = "block";
  });

  document
    .getElementsByClassName("reset")
    .addEventListener("click", function (event) {
      event.preventDefault();
      history.back();
    });
}
