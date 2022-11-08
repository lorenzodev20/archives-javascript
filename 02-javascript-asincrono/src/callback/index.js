/**
 * CALLBACKS EN JAVASCRIPT
 * Una función de callback es una función que se pasa a otra función como un argumento,
 * que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 */

// Funcion para el calculo
function sum(num1,num2){
    return num1+num2;
}

// LLamado del callback
function calc(num1, num2, nombreFuncion){
    return nombreFuncion(num1,num2);
}

// Llamado a la funcion
// console.log(calc(2,10,sum));

// Para revisar los parametros recibidos por consola
// console.log(process.argv);

// EJEMPLO 2: Mostrar la fecha completa la primera en la ejecucion y la segunda 2 segundos despues
function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

// date(printDate);

// function main() {
//   var increase = 9;
//   var prices = [98.99,15.2,20,1026];
//   for (let index = 0; index < prices.length; index++) {
//     prices[index] = prices[index]+increase;
//   }
//   return prices;
// }

// console.log(main());


