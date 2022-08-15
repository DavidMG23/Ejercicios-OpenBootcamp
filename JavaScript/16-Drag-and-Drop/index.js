/*
- Replica el ejercicio completo del vídeo
- Añade dos párrafos más en cada una de las secciones
- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine
*/

const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.caja')
const borrar = document.querySelector('.papelera')

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        event.dataTransfer.setData('id', parrafo.id)
    })
    parrafo.addEventListener('dragend', () => {

    })
})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
    })
    seccion.addEventListener('drop', event => {
        let idParrafo = event.dataTransfer.getData('id')
        let parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

borrar.addEventListener('dragover', event => {
    event.preventDefault()
})

borrar.addEventListener('drop', event => {
    let id = event.dataTransfer.getData('id')
    document.getElementById(id).remove()
})

