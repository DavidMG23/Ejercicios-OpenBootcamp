const miFunction = (val) => {
	if (typeof val === 'number') {
		return 2 * val
	}

	throw new Error('El valor debe ser de tipo número')
}

// const elDoble = miFunction(3)

const dato = '8'

try {
	// Código que puede fallar
	const doble = miFunction(dato)
	console.log(doble)
	console.log('Ejecución correcta')
} catch (e) {
	// En caso de que falle, ejecuta esto otro
	console.error(e)
	console.error('ERROR!')
}
