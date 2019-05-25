'use strict';

(function() {

    var getParams = function (url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };


    function construirCartaHtml(){
        var params = getParams(window.location.href);

        var checkbox = document.getElementById("checkbox");

        var carta = document.getElementById("letter");

        var row = "<p>Hola mamá,</p>"
                      +"</br>"
                      +"<p>"+params.mensaje+"</p>"
                      +"</br>"+
                      "<p>Con cariño,</p>"+
                      "<p>"+params.nombre+"</p>";

        carta.innerHTML = row;
        checkbox.checked = true;

    }

    // function facebookButton(){
    //     var div = document.querySelector(".fb-share-button");
    //     div.setAttribute("data-href", window.location.href);
    // }

    function compartirWhatsapp(){
      var compartir = document.getElementById("whatsapp");

      var htmlWhatsAppSnippet = '<span data-whatsapp="5219988458554" data-whatsapp-message="'+window.location.href+'" style="color:white !important;">Enviar por Whatsapp</span>';

      compartir.innerHTML = htmlWhatsAppSnippet;
    }

  construirCartaHtml();
  // facebookButton();
  compartirWhatsapp();


})();
