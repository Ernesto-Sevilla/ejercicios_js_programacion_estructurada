/* Crear una función flecha que reciba un 
arreglo y uno o más elementos, los añada al final 
del arreglo y devuelva el nuevo arreglo.*/
let numeros = [1, 2, 3, 4, 5];
numeros.push(6, 7, 8);
console.log(numeros);

/*
Crear una función flecha que reciba un arreglo y uno o más elementos, 
los añada al inicio del arreglo y devuelva el nuevo arreglo.
*/
let frutas = ['manzana', 'banana', 'naranja'];
frutas.unshift('fresa', 'kiwi');
console.log(frutas);

/*
Crear una función flecha que reciba un arreglo, elimine y 
devuelva el último elemento del arreglo.
*/
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
let ultimoColor = colores.pop();
console.log(ultimoColor);

/*
Crear una función flecha que reciba un arreglo, elimine y 
devuelva el primer elemento del arreglo.
*/
let animales = ['perro', 'gato', 'conejo', 'pez'];
let primerAnimal = animales.shift();
console.log(primerAnimal);

/*
Crear una función flecha que reciba un arreglo, un elemento y opcionalmente
un índice de inicio, y devuelva el índice de la primera aparición del elemento
o -1 si no lo encuentra.
*/

let letras = ['a', 'b', 'c', 'd', 'e', 'c'];
//Que encuentre la letra 'c' a partir del índice 2
let indiceEncontrado = letras.indexOf('c', 2);
console.log(indiceEncontrado);
//Que no encuentre la letra 'x'
let indiceNoEncontrado = letras.indexOf('x');
console.log(indiceNoEncontrado);


/*
Crear una función flecha que reciba un arreglo y devuelva la cantidad de
elementos en el arreglo.
*/
let numeros2 = [10, 20, 30, 40, 50];
let cantidadElementos = numeros2.length;
console.log(cantidadElementos);

/*
Crear una función flecha que reciba un arreglo de números y los ordene en
orden ascendente usando una función comparadora.
*/
let numeros3 = [5, 2, 9, 1, 5, 6];
numeros3.sort((a, b) => a - b);
console.log(numeros3);

/*
Crear una función flecha que reciba un arreglo y un separador, y devuelva
una cadena con los elementos del arreglo unidos por el separador.
*/
let palabras = ['Hola', 'mundo', 'esto', 'es', 'JavaScript'];
let cadenaUnida = palabras.join("-");
console.log(cadenaUnida);

/*
Crear una función flecha que reciba uno o más arreglos y/o elementos, y
devuelva un nuevo arreglo con todos los elementos combinados.
*/
let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let arregloCombinado = [...arreglo1, ...arreglo2, 7, 8, 9]; //Los tres puntos "..." se usan para combinar arreglos desempaquetándolos
console.log(arregloCombinado);

/*
Crear una función flecha que reciba un arreglo y una función callback, y
ejecute la función por cada elemento del arreglo sin devolver un nuevo
arreglo.
*/
let numeros4 = [1, 2, 3, 4, 5];
numeros4.forEach(num => console.log(num * 2)); //Multiplica cada número por 2 y lo imprime
console.log(numeros4); //El arreglo original permanece sin cambios

/*
Crear una función flecha que reciba un arreglo y una función callback, y
devuelva un nuevo arreglo con los resultados de aplicar la función a cada
elemento.
*/
let numeros5 = [1, 2, 3, 4, 5];
let numerosMultiplicados = numeros5.map(num => num * 3);
console.log(numerosMultiplicados); //Nuevo arreglo con los números multiplicados por 3

/*
Crear una función flecha que reciba un arreglo y una función callback, y
devuelva un nuevo arreglo con los elementos que cumplen la condición
definida por la función. 
*/
let numeros6 = [10, 15, 20, 25, 30];
let numerosFiltrados = numeros6.filter(num => num > 20);
console.log(numerosFiltrados); //Nuevo arreglo con los números mayores a 20

/*
Crear una función flecha que reciba un arreglo, una función callback y
opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando
la función acumuladora.
*/
let numeros7 = [1, 2, 3, 4];
let sumaTotal = numeros7.reduce((acumulador, num) => acumulador + num, 0);
console.log(sumaTotal); //Suma de todos los números en el arreglo