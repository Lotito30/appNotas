
let cambiarColor = {
  blanco : function (elemento){
    elemento.style.color = '#fff'
    elemento.style.borderColor = '#fff'
  },
  negro:function (elemento){ 
    elemento.style.color = '#666'
    elemento.style.borderColor = '#000'
  }
}

function cambiarColorCuerpo(color){

  let contenido = document.querySelectorAll('.faq,#contenedor h3,#guardada div,#guardada div h2,#guardada div p')
  
  let centro = document.querySelector('.centro')
  
  centro.style.backgroundColor = color

  if (color === 'blue' || color === 'red'){
    contenido.forEach(cambiarColor.blanco)
  } else{
    contenido.forEach(cambiarColor.negro) 
  }
}
  
function focus(){
  const inputFocus = document.getElementById('titulo')
  inputFocus.focus()
  inputFocus.setSelectionRange(inputFocus.value.length,inputFocus.value.length)
}

