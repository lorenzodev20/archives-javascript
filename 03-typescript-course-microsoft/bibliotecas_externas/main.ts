import { returnGreeting } from './greetings_module.js';   
import * as allGreetingFunctions from './greetings_module.js';
import {  returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'

// Ejecucion de Modulos en terminal con NodeJs
// compilar el modulo main.ts: tsc --module commonjs main.ts
// ejecucion: node main

// Ejecucion de modulos desde un pagina web
// Compilacion: tsc --module es6 main.ts
// Incliur el main.js en el archiv .html <script type="module" src=".\main.js"></script>