// #-------------------------------Reduce()------------------------------
/* Reduce() -
    El método reduce ejecuta una función reductora sobre cada elemento de un arreglo,
    devolviendo un único valor acumulado. Funsiona tanto con numeros y cadenas*/

//Ejemplo:
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0); // El primero acc es el acumulador, el segundo - num es el valor actual // 0 es el valor inicial del acumulador
console.log(suma); // Output: 15

//Ejemplo con arreglos de objectos:
const productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 }
];

const total = productos.reduce((acc, prod) => acc + prod.precio, 0); // En este caso el objecto prod hace referencia al arreglo por eso se escribe prod.precio por que esta haciendo referencia a la propiedad precio de cada objecto.
console.log(total); // Output: 60

// #----------------------------------------------------------------------------------
// #-------------------------------Find()-------------------------------------------------------

/* Find() -
    El método find devuelve el primer elemento del arreglo que cumple con la
    condición.
*/

//Ejemplo:
const nombres = ['Juan', 'Ana', 'Luis', 'María'];
const encontrado = nombres.find(nombre => nombre.startsWith('L')); // Devuelve el primer nombre que empieza con la letra 'L' utilizando startsWith que es un metodo de los strings para verificar si empieza con una letra en especifico.
console.log(encontrado); // Output: 'Luis'

//Ejemplo con arreglos de objectos:
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Luis' }
];

const usuario = usuarios.find(user => user.id === 2); // Devuelve el primer usuario con id igual a 2 utilizando find
console.log(usuario); // Output: { id: 2, nombre: 'Ana' }

// #----------------------------------------------------------------------------------
// #-------------------------------every()----------------------------------------------

/* every () -
    El método every verifica si todos los elementos del arreglo cumplen con la
    condición. Devuelve true o false.
*/

//Ejemplo:
const edades1 = [18, 22, 25, 30];
const todosMayores = edades.every(edad => edad >= 18); // Verifica si todas las edades son mayores o iguales a 18
console.log(todosMayores); // Output: true

//Ejemplo con arreglos de objectos:
const tareas = [
    { nombre: 'Estudiar', completada: true },
    { nombre: 'Hacer ejercicio', completada: true },
    { nombre: 'Leer', completada: false }
];

const todasCompletadas = tareas.every(tarea => tarea.completada); // Verifica si todas las tareas están completadas
console.log(todasCompletadas); // Output: false

// #----------------------------------------------------------------------------------
// #-------------------------------some()----------------------------------------------
/* some() -
    El método some comprueba si al menos un elemento del arreglo cumple con la
condición.
*/

//Ejemplo:
const notas = [5, 8, 12, 15];
const hayReprobados = notas.some(nota => nota < 6); // Verifica si hay alguna nota menor a 6
console.log(hayReprobados); // Output: true

//Ejemplo con arreglos de objectos:
const inventario = [
    { nombre: 'Manzanas', cantidad: 10 },
    { nombre: 'Naranjas', cantidad: 0 },
    { nombre: 'Plátanos', cantidad: 5 }
];
const agotado = inventario.some(item => item.cantidad === 0); // Verifica si hay algún item con cantidad igual a 0 utilizando some
console.log(agotado); // Output: true

// #----------------------------------------------------------------------------------
// #-------------------------------filter()--------------------------------------------
/*
Filter() -
    El método filter crea un nuevo arreglo con todos los elementos que cumplen una
    condición.
*/

//Ejemplo:
const numeros2 = [1, 2, 3, 4, 5, 20];
const mayoresQue15 = numeros2.filter(num => num > 15); // Crea un nuevo arreglo con los números mayores a 15
console.log(mayoresQue15); // Output: [20]

//Ejemplo con arreglos de objectos:
const empleados = [
    { nombre: 'Juan', puesto: 'Desarrollador'},
    { nombre: 'Ana', puesto: 'Gerente'},
    { nombre: 'Luis', puesto: 'Diseñador'},
];

const desarrolladores = empleados.filter(emp => emp.puesto === 'Desarrollador'); // Crea un nuevo arreglo con los empleados que son desarrolladores utilizando filter
console.log(desarrolladores); // Output: [{ nombre: 'Juan', puesto: 'Desarrollador'}]

// #----------------------------------------------------------------------------------
// -------------------------------Ejercicios Practicos------------------------------------
const arregloPractico = [
    { nombre: 'Carlos', edad: 17 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 15 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 12 }
];

// 1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
 const mayoresDeEdad = arregloPractico.filter(persona => persona.edad >= 18); // Utilizamos filter para crear un nuevo arreglo con las personas mayores o iguales a 18 años
 console.log(mayoresDeEdad); // Output: [ { nombre: 'Ana', edad: 22 }, { nombre: 'María', edad: 30 } ]

// 2. Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const personaConL = arregloPractico.find(persona => persona.nombre.startsWith('L')); // Utilizamos find para encontrar la primera persona cuyo nombre empieza con "L"
console.log(personaConL); // Output: { nombre: 'Luis', edad: 15 }

// 3. Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaEdades = arregloPractico.reduce((acc, persona) => acc + persona.edad, 0); // Utilizamos reduce para sumar todas las edades del arreglo
console.log(sumaEdades); // Output: 96

// 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayores15 = arregloPractico.every(persona => persona.edad >= 15); // Utilizamos every para verificar si todas las personas son mayores o iguales a 15 años
console.log(todosMayores15); // Output: false

// 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años.
const existe40Anios = arregloPractico.some(persona => persona.edad === 40); // Utilizamos some para comprobar si hay al menos una persona con 40 años
console.log(existe40Anios); // Output: false

// #----------------------------------------------------------------------------------
// #-------------------------------Observaciones----------------------------------------------

/* Observación:
    ¿Cual es la direferencia entre find() y startsWith()?
        find() se usa con arreglos para buscar elementos.

        startsWith() se usa con cadenas para comprobar el inicio del texto.
*/


// #----------------------------------------------------------------------------------
// #--------------------------------Ejemplos Practicos------------------------------
// Ejemplo practico =) sacar el promedio de calificaciones 
const calificaciones = [85, 90, 78, 92, 88];
const sumaCalificaciones = calificaciones.reduce((acc, calif) => acc + calif, 0); // Suma todas las calificaciones
console.log(sumaCalificaciones / calificaciones.length); // Utilizamos la funsion length para contar cuantos elementos hay en el arreglo // Output: 86.6


// Ejemplo practico =) encontrar la edad menor a 10

const edades = [12, 5, 8, 21, 3];
const edad = edades.find(edad => edad < 10); // Encuentra la primera edad menor a 10 edad es una asignacion de variable que hace referencia a cada elemento del arreglo
console.log(edad); // Output: 5

// Ejemplo practico =) Verifica cual salaria es mayor a 20000
const salarios = [
    {id: 1, nombre: 'Empleado 1', salario: 18000},
    {id: 2, nombre: 'Empleado 2', salario: 22000},    
    {id: 3, nombre: 'Empleado 3', salario: 25000}
]; 
const usuarioEncontrado = salarios.find(user => user.salario > 20000 && user.nombre.startsWith("E")); // Encuentra el primer usuario con salario mayor a 20000 y que su nombre empieze con "E"
console.log(usuarioEncontrado); // Output: {id: 2, nombre: 'Empleado 2', salario: 22000}