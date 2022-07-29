const logger = require('./logger')



const doble = (dato) => {
    if (typeof dato === 'number') {
		return 2 * dato
	}
    throw new Error('Error')
}
let valor = 'hola'
try {
	const resultado = doble(valor)
    console.log(resultado)
} catch (e) {
	logger.error('El valor ingresado debe ser un número...........')
}