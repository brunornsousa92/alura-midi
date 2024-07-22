let contador = 0;

const listaDeTeclas = document.querySelectorAll(".tecla");

function incrementarContador() {
  contador++;
  console.log("Contador: " + contador);
}

let i = 0;

while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = incrementarContador;
  i++;
}
