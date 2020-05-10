'use strict';

(function() {
  console.log("JS Cargado");

  const boton = document.getElementById("crear");

  const submitCarta = () => {
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
    if (nombre.value == "") alert("Nombre vacío")
    else if (mensaje.value == "") alert("Mensaje vacío")
    else {
      window.location.href = `carta.html?nombre=${nombre.value}&mensaje=${mensaje.value}`
    }
  }

  boton.addEventListener("click", function() {
    submitCarta();
  })

})();
