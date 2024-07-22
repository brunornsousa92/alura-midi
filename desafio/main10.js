let contador;

const listaDeTeclas = document.querySelectorAll(".tecla");

function incrementarContador() {
  contador++;
  console.log("Contador: " + contador);
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  listaDeTeclas[i].onclick = incrementarContador;
}
