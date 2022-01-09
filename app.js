const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/mutiplicar')

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => console.log(err))