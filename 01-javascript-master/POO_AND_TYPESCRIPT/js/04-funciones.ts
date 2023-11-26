// Funciones
console.log("Funciones!..");

function getNumero(numero: number): number
{
    return numero;
}
const sumaNumeros = (numero1: number, numero2:number) => {
    let suma:number = numero1+numero2;
    return suma;
}

console.log('\n La suma es: '+sumaNumeros(5.6,9));
console.log('\n Obtener número: '+getNumero(365));
