$(document).ready(function () {

    console.log("JQuery Cargado!");
    
    //Selector ID
    $("#MiLista").css("background", "red");
    $("#MiListaDos").css("background", "red");

    // Selector de Clase
    $(".elemento").css("background","#13ED34");

    // Selector de Etiqueta
    $("li").click(function () { 
        alert("Holaa!");
    });

    //  Selector de Atributo
    $('[title="Google"]').css("background","#ccc");

    // Find y Parent
    $("p").addClass("margen");

    // El find lo hacemos para saber donde estan los elementos
    $("#caja").find(".resaltado");
});
