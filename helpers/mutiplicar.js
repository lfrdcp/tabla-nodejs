const fs = require('fs')
require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) {
            consola  += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
            salida+= `${base} x ${i} = ${base * i}\n`
        }
        if (listar) {
            console.log('====================')
            console.log(' Tabla del: ', base)
            console.log('====================')
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    } catch (error) {
        throw err
    }
}

module.exports = {
    crearArchivo
}