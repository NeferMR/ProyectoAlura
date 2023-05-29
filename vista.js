function mostrarTextarea() {
  var btnMostrar = document.getElementById("mostrar-btn");
  var textoInicial = document.getElementById("texto-inicial");
  var cancelarBtn = document.getElementById("cancelar-btn");

  textoInicial.innerHTML = "Ingrese texto a descifrar aquí";
  btnMostrar.style.display = "none";
  cancelarBtn.style.display = "inline";
  reiniciar();
}

function cancelarTextarea() {
  var btnMostrar = document.getElementById("mostrar-btn");
  var textoInicial = document.getElementById("texto-inicial");
  var cancelarBtn = document.getElementById("cancelar-btn");

  textoInicial.innerHTML = "Ingrese texto a cifrar aquí";
  btnMostrar.style.display = "inline";
  cancelarBtn.style.display = "none";
  reiniciar();
}

function reiniciar() {
  var textarea = document.getElementById("mi-textarea");
  var textoReflejado = document.getElementById("texto-reflejado");
  var texto = document.getElementById("texto-inicial");

  texto.style.display = "block"
  textarea.value = "";
  textoReflejado.value = "";
  mostrarElementosTarjeta();
}

function copiarTexto() {
  var textoReflejado = document.getElementById("texto-reflejado");
  textoReflejado.select();
  document.execCommand("copy");
}

// Función para reflejar el texto de la textarea en la tarjeta y el textarea reflejado
function reflejarTexto() {
  var textarea = document.getElementById("mi-textarea");
  var textoReflejado = document.getElementById("texto-reflejado");
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var texto = document.getElementById("texto-inicial");

  if (textarea.value === "") {
    texto.style.display = "block"
    textoReflejado.value = "";
    mostrarElementosTarjeta();
  } else {
    texto.style.display = "none"
    textoReflejado.value = textarea.value;
    ocultarElementosTarjeta();
    
  }
}

// Agregar evento al cambio de texto en la textarea
var textarea = document.getElementById("mi-textarea");
textarea.addEventListener("input", reflejarTexto);

// Ocultar texto y imagen de la tarjeta
function ocultarElementosTarjeta() {
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var boton = document.getElementById("botoncopiar");
  var imagenTarjeta = document.querySelector("#tarjeta-container img");

  textoTarjeta.style.display = "none";
  imagenTarjeta.style.display = "none";
  boton.style.display = "block";
}

// Mostrar texto y imagen de la tarjeta
function mostrarElementosTarjeta() {
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var boton = document.getElementById("botoncopiar");
  var imagenTarjeta = document.querySelector("#tarjeta-container img");

  textoTarjeta.style.display = "block";
  imagenTarjeta.style.display = "block";
  boton.style.display = "none";

}

function ajustarAltura() {
  var contenedor = document.getElementById("pie");
  var textarea = document.getElementById("mi-textarea");

  contenedor.style.height = "auto"; // Restablecer la altura al valor automático
  contenedor.style.height = textarea.scrollHeight + "px"; // Establecer la altura del contenedor según el contenido del textarea
}