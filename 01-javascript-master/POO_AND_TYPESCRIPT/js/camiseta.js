var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Decorador
// function estampar(logo:string) {
//     return function (target:Function) {
//         target.prototype.estampacion = function():void{
//             console.log("Camiseta estampada con el logo de: "+logo);
//         } 
//     }
// }
// Clases en TYPESCRIPT (Molde del objeto)
// @estampar('Logo')
var Camiseta = /** @class */ (function () {
    // Methods (Funciones o acciones del objeto)
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
// Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("rojo", "Urbano", "Adidas", "M", "25000");
camiseta.showCamiseta();
// camiseta.estampacion();
var sudadera = new Sudadera("Azul", "Nike", "AdiLike", "M", "26000");
sudadera.setCapucha(false);
console.log(sudadera);
