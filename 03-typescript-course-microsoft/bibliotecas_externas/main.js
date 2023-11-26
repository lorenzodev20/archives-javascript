"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings_module_js_1 = require("./greetings_module.js");
var allGreetingFunctions = require("./greetings_module.js");
var greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
(0, greetings_module_js_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
(0, greetings_utilities_module_js_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
// Ejecucion de modulos desde un pagina web
// Compilacion: tsc --module es6 main.ts
// Incliur el main.js en el archiv .html <script type="module" src=".\main.js"></script>
