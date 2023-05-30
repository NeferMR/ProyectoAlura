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

function encriptarTexto(texto) {
  var resultado = '';
  for (var i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case 'a':
        resultado += 'ai';
        break;
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += texto[i];
        break;
    }
  }
  return resultado;
}

function desencriptarTexto(texto) {
  var resultado = '';
  var i = 0;
  while (i < texto.length) {
    switch (texto[i]) {
      case 'a':
        if (texto[i+1] === 'i'){
          resultado += 'a';
          i += 2;
        } else {
          resultado += texto[i];
          i++;
        }
        break;
      case 'e':
        if (texto[i+1] === 'n' && texto[i+2] === 't' && texto[i+3] === 'e' && texto[i+4] === 'r'){
          resultado += 'e';
          i += 5;
        } else {
          resultado += texto[i];
          i++;
        }  
        break;
      case 'i':
        if (texto[i+1] === 'm' && texto[i+2] === 'e' && texto[i+3] === 's'){
          resultado += 'i';
          i += 4;
        } else {
          resultado += texto[i];
          i++;
        }  
        break;
      case 'o':
        if (texto[i+1] === 'b' && texto[i+2] === 'e' && texto[i+3] === 'r'){
          resultado += 'o';
          i += 4;
        } else {
          resultado += texto[i];
          i++;
        }  
        break;
      case 'u':
        if (texto[i+1] === 'f' && texto[i+2] === 'a' && texto[i+3] === 't'){
          resultado += 'u';
          i += 4;
        } else {
          resultado += texto[i];
          i++;
        }
        break;
      default:
        resultado += texto[i];
        i++;
        break;
    }
  }
  return resultado;
}

// Función para reflejar el texto de la textarea en la tarjeta y el textarea reflejado
function reflejarTexto() {
  var textarea = document.getElementById("mi-textarea");
  var textoReflejado = document.getElementById("texto-reflejado");
  var textoTarjeta = document.getElementById("texto-tarjeta");
  var texto = document.getElementById("texto-inicial");
  var btnMostrar = document.getElementById("mostrar-btn");

  if (textarea.value === "") {
    texto.style.display = "block"
    textoReflejado.value = "";
    mostrarElementosTarjeta();
  } else {
    texto.style.display = "none"
    console.log(btnMostrar.style.display);
    if (btnMostrar.style.display === "none") {
      textoReflejado.value = desencriptarTexto(textarea.value);
    } else {
      textoReflejado.value = encriptarTexto(textarea.value);
    }
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
  var ancho = window.innerWidth;

  if (ancho > 768) {
    imagenTarjeta.style.display = "block";
  }
  textoTarjeta.style.display = "block";
  boton.style.display = "none";

}

function ajustarAltura() {
  var contenedor = document.getElementById("pie");
  var textarea = document.getElementById("mi-textarea");

  contenedor.style.height = "auto"; // Restablecer la altura al valor automático
  contenedor.style.height = textarea.scrollHeight + "px"; // Establecer la altura del contenedor según el contenido del textarea
}