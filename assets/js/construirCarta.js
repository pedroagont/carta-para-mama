'use strict';

(() => {

    const getParams = (url) => {
        const params = {};
        const parser = document.createElement('a');
        parser.href = url;
        const query = parser.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };

    const construirCartaHtml = () => {
        const { nombre, mensaje } = getParams(window.location.href);
        const checkbox = document.getElementById("checkbox");
        const carta = document.getElementById("letter");
        const html = `<p>Hola mamá,</p></br>
                       <p>${mensaje}</p></br>
                       <p>Con cariño,</p>
                       <p>${nombre}</p>`;
        carta.innerHTML = html;
        checkbox.checked = true;
        return;
    }

  construirCartaHtml();

})();
