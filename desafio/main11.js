document.querySelectorAll(".tecla").forEach(function (tecla) {
  tecla.addEventListener("click", function () {
    this.classList.add("ativa");
  });
});
