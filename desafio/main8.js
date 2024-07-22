const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

function incrementarContador() {
  contador++;
  console.log("Contador: " + contador);
}

listaDeTeclas[3].onclick = incrementarContador;
