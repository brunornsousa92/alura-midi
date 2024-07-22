let contador = 0;

function incrementarContador() {
  contador++;
  console.log("Contador: " + contador);
}

const tecla = document.querySelector(".tecla_aqui");
tecla.onclick = incrementarContador;
