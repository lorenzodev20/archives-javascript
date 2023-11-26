/* 
console.log('Hola Mundo!!')

new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta', true)
    // reject('Promesa resuelta con error')
})
.then(msg => console.log(msg))
.catch(err => console.log(err) )

console.log('Fin')
*/

import { getHeroById } from "./bases/08-imp-exp";

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero) {
                resolve(hero)
            }else{
                reject('heroe no existe')
            }
        }, 1000)
    })
    
}

getHeroByIdAsync(2)
    .then(h => {
        console.log(`El heroe es: ${h.name}`)
    })
    .catch(console.log)