function mostrarTextarea() {
  var btnMostrar = document.getElementById("mostrar-btn");
  var textoInicial = document.getElementById("texto-inicial");
  var textarea = document.getElementById("mi-textarea");
  var contenidoReflejado = document.getElementById("contenido-reflejado");
  var cancelarBtn = document.getElementById("cancelar-btn");

  textoInicial.style.display = "none";
  textarea.style.display = "block";
  btnMostrar.style.display = "none";
  contenidoReflejado.style.display = "block";
  cancelarBtn.style.display = "inline";
  ocultarElementosTarjeta();
}

function cancelarTextarea() {
  var btnMostrar = document.getElementById("mostrar-btn");
  var textoInicial = document.getElementById("texto-inicial");
  var textarea = document.getElementById("mi-textarea");
  var contenidoReflejado = document.getElementById("contenido-reflejado");
  var cancelarBtn = document.getElementById("cancelar-btn");

  textoInicial.style.display = "block";
  btnMostrar.style.display = "inline";
  contenidoReflejado.style.display = "none";
  cancelarBtn.style.display = "none";
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
    ocultarElementosTarjeta();
    textoReflejado.value = textarea.value;
  }
}

// Agregar evento al cambio de texto en la textarea
var textarea = document.getElementById("mi-textarea");
textarea.addEventListener("input", reflejarTexto);

// Ocultar texto y imagen de la tarjeta
function ocultarElementosTarjeta() {
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var imagenTarjeta = document.querySelector("#tarjeta-container img");

  textoTarjeta.style.display = "none";
  imagenTarjeta.style.display = "none";
  boton.style.display = "none";
}

// Mostrar texto y imagen de la tarjeta
function mostrarElementosTarjeta() {
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var boton = document.getElementById("copiar-btn");
  var imagenTarjeta = document.querySelector("#tarjeta-container img");

  textoTarjeta.style.display = "block";
  imagenTarjeta.style.display = "block";
  boton.style.display = "block";

}

function mostrarTextarea() {
  var btnMostrar = document.getElementById("mostrar-btn");
  var textoInicial = document.getElementById("texto-inicial");
  var textarea = document.getElementById("mi-textarea");
  var contenidoReflejado = document.getElementById("contenido-reflejado");
  var cancelarBtn = document.getElementById("cancelar-btn");

  textoInicial.style.display = "none";
  textarea.style.display = "block";
  btnMostrar.style.display = "none";
  contenidoReflejado.style.display = "block";
  cancelarBtn.style.display = "inline";
  ocultarElementosTarjeta();
}

function ajustarAltura() {
  var contenedor = document.getElementById("pie");
  var textarea = document.getElementById("mi-textarea");

  contenedor.style.height = "auto"; // Restablecer la altura al valor automático
  contenedor.style.height = textarea.scrollHeight + "px"; // Establecer la altura del contenedor según el contenido del textarea
}