// Clase (Molde del objeto)
class Camiseta {

    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca:string;
    private talla: string;
    private precio: number;

    // Metodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

    public showCamiseta(){
        console.log("Detalles de la camiseta");
        console.log("Color: "+ this.color + " \n");
        console.log("Modelo: "+ this.modelo + " \n");
        console.log("Marca: "+ this.marca + " \n");
        console.log("Talla: "+ this.talla + " \n");
        console.log("Precio: "+ this.precio + " \n");
        console.log("Fin del detalle!..");
    }
}

var camiseta = new Camiseta("rojo","Urbano","Adidas","M","25000");

camiseta.showCamiseta();