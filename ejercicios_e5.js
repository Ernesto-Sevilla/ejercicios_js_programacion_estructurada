// Declarando un arreglo
let arreglo = [1,2,3, "texto", true];

// Se puede usar otro tipo de variable
const arreglo2 = [1,2,3, "texto", true];

// Utiliz<amos la clase de Array 
let arreglo3 = new Array(1, 2, 3)

// Arreglo vacio []
let arreglo4 = [];

// Arreglo de objectos [{}]
let arreglo5 = [{}, {}, {}, {}];

// Arreglos de objectos llenos [{"Hola"}]
let arreglo6 = [{"Nombre":"Ernesto Sevilla", "edad": 18}, {}, {}, {}];

//Arreglo de Arreglos [[]]
let arreglo7 = [[{}, {}], ["A", 1, 2], [true, false]];

// Metodo push() Agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
let numeros = [1, 2, 3]; //Creamos un arreglo con 3 elementos
let longitud = numeros.push(4, 5); // Agregamos 2 elementos al final del arreglo utilizando "push" y guardamos la nueva longitud en la variable 'longitud'
console.log(numeros); // [1, 2, 3, 4, 5] // Mostramos el arreglo actualizado
console.log(longitud); // 5 // Mostramos la nueva longitud del arreglo

// Metodo unshift() Agrega uno o más elementos al inicio de un arreglo y devuelve la nueva longitud del arreglo.
let letras = ['b', 'c']; // Creamos un arreglo con 2 elementos
let longitudletras = letras.unshift('a'); // Agregamos un elemento al inicio del arreglo utilizando "unshift" y guardamos la nueva longitud en la variable 'longitudletras'
console.log(letras); // ['a', 'b', 'c'] // Mostramos el arreglo actualizado
console.log(longitudletras); // 3 // Mostramos la nueva longitud del arreglo

// Metodo pop() Elimina el último elemento de un arreglo y lo devuelve. Este método cambia la longitud del arreglo.
let frutas = ['manzana', 'banana', 'naranja']; // Creamos un arreglo con 3 elementos
let ultima = frutas.pop(); // Eliminamos el último elemento del arreglo utilizando "pop" y guardamos el elemento eliminado en la variable 'ultima'
console.log(frutas); // ['manzana', 'banana'] // Mostramos el arreglo actualizado
console.log(ultima); // 'naranja' // Mostramos el elemento eliminado

// Metodo indexOf() Devuelve el primer índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si no está presente.
let numeros2 = [10, 20, 30, 20, 40]; // Creamos un arreglo con 5 elementos
let indice = numeros2.indexOf(20); // 1 // Buscamos el índice del primer elemento '20' en el arreglo utilizando "indexOf" y guardamos el índice en la variable 'indice'
let indiceDesde2 = numeros2.indexOf(20, 2); // 3 // Buscamos el índice del elemento '20' en el arreglo comenzando desde el índice 2 utilizando "indexOf" y guardamos el índice en la variable 'indiceDesde2'
console.log(indice); // 1 // Mostramos el índice del primer '20'
console.log(indiceDesde2); // 3 // Mostramos el índice del '20' encontrado desde el índice 2

// Propiedad length Devuelve o establece la cantidad de elementos en un arreglo.
let arreglo8 = [1, 2, 3]; // Longitud inicial es 3
console.log(arreglo8.length); // 3 // Mostramos la longitud inicial del arreglo
arreglo8.length = 1; // Trunca (Elimina) a [1]
arreglo8.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

/* 
Notas:
    Añadir y quitar elementos al final de un arreglo
        Añadir elementos al final del arreglo: push()
        Eliminar el último elemento del arreglo: pop()


    Añadir y quitar elementos al inicio de un arreglo
        Añadir elementos al inicio del arreglo: unshift()
        Eliminar el primer elemento del arreglo: shift()
*/
