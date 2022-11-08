/**
 * Fetch (sustituto de ajax) y peticiones asincronas a servicios rest
 */
"use strict";

var usuarios;

var div_usuarios = document.querySelector("#div-usuarios");

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((data) => data.json())
  .then((data) => {
    usuarios = data;
    usuarios.map((user, i) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = `${user.id}) ${user.name}`;
        div_usuarios.appendChild(nombre);
    });
    document.querySelector(".loading").style.display="none";
  });