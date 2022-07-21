/*
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

const listaCompra = ['Leche', 'Pavo', 'Bananas', 'Manzanas', 'Macarrones', 'Cerveza']

listaCompra.push('Aceite de Girasol')

listaCompra.pop()

const listaPelis = [
	{ titulo: 'Iron Man', director: 'Jon Favreau', fecha: new Date(2008, 3, 14) },
	{ titulo: 'Avengers Endgame', director: 'Anthony y Joe Russo', fecha: new Date(2019, 11, 14) },
	{ titulo: 'John Wick', director: 'Chad Stahelski', fecha: new Date(2014, 10, 3) },
]

const filterPelis = listaPelis.filter((peli) => {
	if (peli.fecha > new Date(2010, 0, 1)) {
		return true
	}
})

const directores = listaPelis.map((elem) => elem.director)

const titulos = listaPelis.map((title) => title.titulo)

const directorTitle = directores.concat(titulos)

const directorTitle2 = [...directores, ...titulos]
