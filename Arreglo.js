// declaramos los atributos por comparar
var usuarios = [{
    'nombre': 'jhon',
    'apellido': 'doe'
}, {
    'nombre': 'jane',
    'apellido': null
}, {
    'nombre': 'jose',
    'apellido': 'doe'
}, {
    'nombre': 'Luis',
    'apellido': null
}, {
    'nombre': 'giovanny',
    'apellido': 'doe'
}]

// comparar si los atributos son iguales para realizar el arreglo

var ape = usuarios.filter(function(el) {
    return el.apellido === 'doe'
})

console.log("Lista de los usuarios")
console.log(ape)