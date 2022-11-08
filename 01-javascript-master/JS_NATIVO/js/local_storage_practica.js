"use strict";

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener("submit", function () {
  var pelicula = document.querySelector("#pelicula").value;
  if (pelicula.length >= 1) {
    localStorage.setItem(pelicula, pelicula);
  }
});

var formulario = document.querySelector("#formEliminarPeliculas");

formulario.addEventListener("submit", function () {
  var pelicula = document.querySelector("#peliculaEliminar").value;
  if (pelicula.length >= 1) {
    localStorage.removeItem(pelicula, pelicula);
  }
});

var lista = document.querySelector("#listaPeliculas");
for (var key in localStorage) {
    if (typeof localStorage[key] == 'string') {
        var li = document.createElement("li");
        li.append(key)
        lista.append(li);
    }
}