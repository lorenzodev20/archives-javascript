/**
 * Fetch (sustituto de ajax) y peticiones asincronas a servicios rest
 */
"use strict";

var usuarios;

var div_usuarios = document.querySelector("#div-usuarios");
var div_usuario_detalle = document.querySelector("#div-usuario-detalle");
var div_profesor = document.querySelector("#div-profesor");

// Encapsulamos las peticiones fetch hacia la api
function getUsuariosLista() {
  return fetch("https://reqres.in/api/users");
}

function getUsuario() {
  return fetch("https://reqres.in/api/users/2");
}

// Generamos las funciones de impresion HTML

/**
 * Imprime el listado de usuarios
 */
function printListadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement("h3");
    nombre.innerHTML = `${user.id}) ${user.first_name} ${user.last_name} - Email: ${user.email}`;
    div_usuarios.appendChild(nombre);
  });
  document.querySelector(".loading-list").style.display = "none";
}

/**
 * Imprime el detalle de un usuario
 */
function printDetalleUsuario(user) {
  let nombre = document.createElement("h3");
  nombre.innerHTML = `${user.first_name} ${user.last_name} - Email: ${user.email}`;
  div_usuario_detalle.appendChild(nombre);

  let imagen = document.createElement("img");
  imagen.src = user.avatar;
  div_usuario_detalle.appendChild(imagen);

  document.querySelector(".loading-detail").style.display = "none";
}

function printDatoProfesor(dato){
  let info = document.createElement("span");
  info.innerHTML = dato;
  div_profesor.appendChild(info);
  document.querySelector(".loading-profesor").style.display = "none";
}
function getInfo(){
  var dato = {
    nombre: "Lorenzo",
    apellido: "Rojo",
    url: "http://lorenzorojo.com"
  };

  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function () {
      profesor_string = JSON.stringify(dato);
      if (typeof profesor_string != "string" || profesor_string == "") {
       return reject("Error 1");
      }

      return resolve(profesor_string);
     }, 3000);

  })
}

// Iniciamos la ejecución del programa

/**
* Acá encadenamos varias promesas para poder ejecutar las intrucciones que necesitamos
*/

getUsuariosLista()
  .then((data) => data.json())
  .then((users) => {
    printListadoUsuarios(users.data);
    return getInfo();
  })
  .then((data) => {
    printDatoProfesor(data);
    return getUsuario();
  })
  .then((data) => data.json())
  .then((user) => {
    printDetalleUsuario(user.data);
  });
