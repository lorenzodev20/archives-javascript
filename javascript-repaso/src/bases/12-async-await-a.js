/**
 * Async Await: Nos ayuda a ejecutar codigo javascript de manera Sincrona
 */

const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Promesa Resuelta')
            reject('Promesa fallida')
        }, 1000)
    })
}

const medirTiempoAsync = async () => {
    try {
        console.log('Inicio');
        const result = await miPromesa();
        console.log(result);
        console.log('Fin');
        return 'Función medirTiempoAsync Finalizado';
    } catch (error) {
        return 'Error medirTiempoAsync';
    }
}

medirTiempoAsync()
    .then((rps) => { console.log('Try Exitoso: ', rps) })
    .catch((err) => { console.log('Err', err) })