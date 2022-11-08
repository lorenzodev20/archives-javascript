// Clase (Molde del objeto)
var Camiseta = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.showCamiseta = function () {
        console.log("Detalles de la camiseta");
        console.log("Color: " + this.color + " \n");
        console.log("Modelo: " + this.modelo + " \n");
        console.log("Marca: " + this.marca + " \n");
        console.log("Talla: " + this.talla + " \n");
        console.log("Precio: " + this.precio + " \n");
        console.log("Fin del detalle!..");
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "Urbano", "Adidas", "M", "25000");
camiseta.showCamiseta();
