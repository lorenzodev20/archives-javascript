'use strict'
// LOCAL STORAGE

//Comprobar disponibilidad de localstorage
if (typeof(Storage) !== undefined) {
    console.log("Compatible con Localstorage!");
}else{
    console.log("NO, compatible con Localstorage!");
}

// Guardar datos al localstorage
localStorage.setItem("Titulo", "Curso de Symfony de Victor Robles");

// Recuperar datos del LocalStorage
var titulo = localStorage.getItem("Titulo");

// Asignar al HTML
document.querySelector("#informacion").innerHTML = titulo;

// Guardar Objetos
var usuario = {
    nombre: "Lorenzo Antonio Rojo Garces",
    email:"lorenzorojo12@gmail.com",
    web: "lorenzorojo.com"
};

// Asignar al LocalSotrage
localStorage.setItem("Usuario",JSON.stringify(usuario));

// Recuperar objeto del LocalSotrage
var infoUsuario = localStorage.getItem("Usuario");
var objInfoUsuario = JSON.parse(infoUsuario);
console.log("String del LocalStorage: "+infoUsuario);
console.log(objInfoUsuario);

// Agregarlos al HTML
var infoUserHtml = `Nombre: ${objInfoUsuario.nombre} Email: ${objInfoUsuario.email} Sitio Web: ${objInfoUsuario.web}`;

document.querySelector("#informacion").append(infoUserHtml);


