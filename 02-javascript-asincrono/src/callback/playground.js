/**
 * En este desafío tienes que crear una función que reciba un callback
 * pero este tiene que ser ejecutado 2s despues.
 */

export function runCode(callback) {
  window.setTimeout(() => {
    callback();
  }, 2000);
}

runCode(() => console.log('Execute function 2s after'));