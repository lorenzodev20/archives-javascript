console.log("Check!..");

var bicileta = {
    color: "Rojo",
    modelo: "BMX",
    frenos: "Disco",
    velocidaMaxima: "60Km",
    cambiarColor: function(nuevoColor) {
        //bicileta.color = nuevoColor; // Se puede cambiar asi la propiedad
        this.color = nuevoColor; // Tambien se puede cambiar asi
    }
};

console.log(bicileta);
bicileta.cambiarColor("Azul");
console.log(bicileta);