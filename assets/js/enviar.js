'use strict';

(function() {
  console.log("JS Cargado");

  let boton = document.getElementById("crear");

  const submitCarta = () => {

      let nombre = document.getElementById("nombre");
      let mensaje = document.getElementById("mensaje");

      if (nombre.value == "") alert("Nombre vacío")
      else if (mensaje.value == "") alert("Mensaje vacío")
      else { window.location.href = "carta.html?nombre="+nombre.value+"&mensaje="+mensaje.value }
    }

    boton.addEventListener("click",function(){
    submitCarta();
  })

})();
