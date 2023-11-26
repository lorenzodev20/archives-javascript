console.log("\n 144 - Objetos con JSON!.. \n");

var bicileta = {
    color: "Rojo",
    modelo: "BMX",
    frenos: "Disco",
    velocidaMaxima: "60Km",
    cambiarColor: function(nuevoColor) {
        // bicileta.color = nuevoColor; // Se puede cambiar asi la propiedad
        this.color = nuevoColor; // Tambien se puede cambiar asi
    }
};

console.log('Objeto Bicicleta: ',bicileta);

bicileta.cambiarColor("Azul");

console.log('Objeto Bicicleta Modificado: ',bicileta);