'use strict';

(function() {
  console.log("JS Cargado");

  var boton = document.getElementById("crear");

  function enviarCarta(){

      var nombre = document.getElementById("nombre");
      var mensaje = document.getElementById("mensaje");

      if (nombre.value == "") {
        alert("Nombre vacío");
      } else if (mensaje.value == "") {
            alert("Mensaje vacío");
      } else {
      window.location.href = "carta.html?nombre="+nombre.value+"&mensaje="+mensaje.value;
      }

    }

    boton.addEventListener("click",function(){

    enviarCarta();

  })


})();
