'use Strict'

window.addEventListener('load',()=>{
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    // Ocultar el div de los resultados
    box_dashed.style.display = "none";
    formulario.addEventListener("submit",() => {
        // Capturar los elementos del formulario
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        // Respuesta
        var response = true;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre es invalido");
            response = false;
            return false;
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("El apellido es invalido");
            response = false;
            return false;
        }
        if (edad == null || edad <=0 || isNaN(edad)) {
            alert("La edad es invalida");
            response = false;
            return false;
        }

        if (response) {
            // Mostrar el div de los resultados
            box_dashed.style.display = "block";
            var datos = [nombre, apellido, edad];
            var indice;
            for (indice in datos) {
                var parrafo = document.createElement("p");
                parrafo.append(datos[indice]);
                box_dashed.append(parrafo);
            }
        }
    });
});
