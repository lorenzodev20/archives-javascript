// TYPESCRIPT

// TIPOS DE DATOS

// String
let cadena:string = "lorenzorojo.com";

// Number
let numero: number = 25;

// Booleano
let booleano:boolean = true;

// Any
let cualquiera: any = "hola2564";

// Arrays
var lenguajes:Array<any> =["PHP", "Laravel", "JS"];

let years:any[]= ["DOCE", 13, 14];

// MULTIPLES TIPOS DE DATOS

let multiple: string|number = "Hola mundo";
multiple = 256;

// TIPOS DE DATOS PERSONALIZADOS

type miTipoDato = string | number | boolean; // Defino mi tipo de dato

// se lo puedo asignar a la variable

let nuevaVar:miTipoDato = "Hola";


console.log(cadena, numero, booleano, cualquiera, lenguajes, years);
