// Interface
interface CamisetaInterface {
    setColor(color);
    getColor();
}

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
class Camiseta implements CamisetaInterface{
    // Property's (characteristics of object)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: string | number;

    // Methods (Funciones o acciones del objeto)
    constructor(color: string, modelo: string, marca: string, talla: string, precio: string | number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

    public showCamiseta() {
        console.log("Detalles de la camiseta");
        console.log("Color: " + this.color + " \n");
        console.log("Modelo: " + this.modelo + " \n");
        console.log("Marca: " + this.marca + " \n");
        console.log("Talla: " + this.talla + " \n");
        console.log("Precio: " + this.precio + " \n");
        console.log("Fin del detalle!..");
    }
}

// Herencia
class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

let camiseta = new Camiseta(
    "rojo",
    "Urbano",
    "Adidas",
    "M",
    "25000"
);

camiseta.showCamiseta();
// camiseta.estampacion();

let sudadera = new Sudadera(
    "Azul",
    "Nike",
    "AdiLike",
    "M",
    "26000"
);
sudadera.setCapucha(false);
console.log(sudadera);