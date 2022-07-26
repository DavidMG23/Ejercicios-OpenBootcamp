/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const misDatos = {
	nombre: 'David',
	apellido: 'Morales',
	edad: 36,
	altura: 1.76,
	eresDesarrollador: 'si',
}

const edad = misDatos.edad

const amigos = [
	{ ...misDatos },
	{
		nombre: 'Dario',
		apellido: 'Jofre',
		edad: 35,
		altura: 1.8,
		eresDesarrollador: 'no',
	},
	{
		nombre: 'Oscar',
		apellido: 'Trigo',
		edad: 34,
		altura: 1.65,
		eresDesarrollador: 'no',
	},
]

const array = amigos.sort((a, b) => b.edad - a.edad)
console.table(array)
