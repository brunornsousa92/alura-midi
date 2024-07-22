document.querySelectorAll(".tecla").forEach(function (tecla) {
  tecla.addEventListener("click", function (event) {
    const elementoClicado = event.target;

    if (elementoClicado.classList.contains("ativa")) {
      elementoClicado.classList.remove("ativa");
    } else {
      elementoClicado.classList.add("ativa");
    }
  });
});
