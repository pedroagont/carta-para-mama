'use strict';

(function() {

    let getParams = function (url) {
        let params = {};
        let parser = document.createElement('a');
        parser.href = url;
        let query = parser.search.substring(1);
        let vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };

    const construirCartaHtml = () => {
        let params = getParams(window.location.href);
        let checkbox = document.getElementById("checkbox");
        let carta = document.getElementById("letter");

        let mensaje = "<p>Hola mamá,</p>"+
                      "</br>"+
                      "<p>"+params.mensaje+"</p>"+
                      "</br>"+
                      "<p>Con cariño,</p>"+
                      "<p>"+params.nombre+"</p>";

        carta.innerHTML = mensaje;
        checkbox.checked = true;

    }

    // function facebookButton(){
    //     var div = document.querySelector(".fb-share-button");
    //     div.setAttribute("data-href", window.location.href);
    // }

    // function compartirWhatsapp(){
    //   var compartir = document.getElementById("whatsapp");
    //
    //   var htmlWhatsAppSnippet = '<span data-whatsapp="5219988458554" data-whatsapp-message="'+window.location.href+'" style="color:white !important;">Enviar por Whatsapp</span>';
    //
    //   compartir.innerHTML = htmlWhatsAppSnippet;
    // }

  construirCartaHtml();
  // facebookButton();
  // compartirWhatsapp();


})();
