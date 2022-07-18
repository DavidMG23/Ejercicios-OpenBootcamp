// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let dato = 10
let resultado = 1

while (true) {
    if(dato > 0) {
        resultado *= dato
        dato--
    } else {
        break
    }
}

console.log(resultado)