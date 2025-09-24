//Arreglo de numeros 
let numeros = [5, 2, 9, 1, 7]; 

// Orden ascendente
numeros.sort((a, b) => a - b); // Para no complicarse solo es de poner el a antes que el b para un arreglo ascendente 
console.log(numeros);

//Orden descendente
numeros.sort((a, b) => b - a); //En cambio si lo queremos de manera descendente es el b y luego a
console.log(numeros);

// Arreglo de cadenas 
let frutas = ["Banana", "Manzana", "Naranja", "Uva", "kiwi", "Anona"];
frutas.sort();
console.log(frutas);

// Orden alfabetico inverso
let frutas2 = ["Banana", "Manzana", "Naranja", "Uva"];
frutas2.sort((a, b) => b.localeCompare(a)); //Es un metodo más seguro y su particularidad es que es compatible con el idioma español
console.log(frutas2);

// Alfabeto
/* ------------------------------------------------
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
----------------------------------------------------
*/ 

// Creamos arreglo de objectos =)
let personas = [
    { nombre: "Ana", edad: 25}, // Cada objecto contiene datos de diferentes personas (Nombre, edad)
    { nombre: "Juan", edad: 38},
    { nombre: "Pedro", edad: 20}
];

// Ahora vamos a utilizar el sort para ordenar las edades de forma ascendente utilizando matematicas por que usamos numeros.
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

    //Vamos a imprimir los valores de forma descendente
    personas.sort((a, b) => b.edad - a.edad); //Solo cambiamos el orden en el que se compararán los datos a por b
    console.log(personas);

// Despuesa vamos a utilizar el sort para ordenar los nombres de forma ascendente utilizando la funsion "localeCompare" del arreglo (Solo funciona con cadenas "").
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);

    //Vamos a imprimir los valores de forma descendente
    personas.sort((a, b) => b.nombre.localeCompare(a.nombre)); //Solo cambiamos el orden en el que se compararán los datos a por b
    console.log(personas);

//Vamos a utilizar una funsión para arreglos llamada: "reverse"
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8]; //Creamos arreglos de numeros
numeros2.reverse(); //Ordena los elementos del arreglos de forma descendente
console.log(numeros2);

    //No importa si es letras o numeros la funsion funciona "Valga la redundancia =)"

let palabras = ["Hola", "Mundo", "javaScript"]; //Creamos arreglos de palabras
palabras.reverse(); //Ordena los elementos del arreglos de forma descendente
console.log(palabras);

//Ejercicio practico #-----------------------------------------------------------#

// Creamos arreglos de objectos con datos de las  calificaciones de las personas 
let calificaciones = [
    { estudiante: "Eliab", asignatura: "Matematicas", calificacion: 60 },
    { estudiante: "Xiomara", asignatura: "Historia", calificacion: 100 },
    { estudiante: "Camilo", asignatura: "Español", calificacion: 80 },
    { estudiante: "Ramiro", asignatura: "Fisica", calificacion: 55 },
    { estudiante: "Ana", asignatura: "Quimica", calificacion: 77 }
];

// Mostrar el arreglo de manera descendente en las asignaturas
console.log(calificaciones.sort((a, b) => b.asignatura.localeCompare(a.asignatura))); /* utilizamos la funcion de "localeCompare" ya que solo funciona para las 
                                                                                        palabras para hacer posible la imprecion de asignaturas de manera ascendente*/

// Mostrar el arreglo de manera descendente en las calificaciones
console.log(calificaciones.sort((a, b) => b.calificacion - a.calificacion)); /* En este caso no es necesario utilizar el "localcompare" ya que utilizaremos numeros
                                                                                y los numeros pueden usarse con matematicas por lo que restamos el ultimovalor que es "b" para restarlo por "a"*/

//Tarea

// 1. Dado un arreglo de números [10, 3, 8, 1, 6], ordénalo en orden ascendente utilizando el método sort().

    //Creamos el arreglo de numeros
    let numeros3 = [10, 3, 8, 1, 6];
    //Ordenamos los numeros de forma ascendente e imprimimos en la consola
    console.log(numeros3.sort((a, b) => a - b));

// 2. Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente sin modificar el arreglo original.
    //Creamos el arreglo de cadenas de mascotas
    let mascotas = ["perro", "gato", "elefante", "ardilla"];
    //Ordenamos las cadenas de forma alfabetica (Cabe recalcar que utilizamos la funsion localCompare ya que no modifica el arreglo) e imprimimos en la consola
    let mascotasOrdenadas = [...mascotas].sort((a, b) => a.localeCompare(b));
    //Imprimimos el arreglo ordenado
    console.log(mascotasOrdenadas);
    //Confirmamos que el arreglo original no se modifico
    console.log(mascotas);

/* 3. Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta",
puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden
descendente. */

    //Creamos el arreglo de objectos con datos de las personas y sus puntajes
    let estudiantes = [
        { nombre: "Luis", puntaje: 85 },
        { nombre: "Marta", puntaje: 92 },
        { nombre: "Sofía", puntaje: 78 }
    ];
    //Ordenamos los puntajes de forma descendente utilizando la funcion de "sort" e imprimimos en la consola
    console.log(estudiantes.sort((a, b) => b.puntaje - a.puntaje));

// 4. Dado un arreglo de números [4, 9, 2, 7, 5], invierte su orden utilizando el método reverse().
    //Creamos el arreglo de numeros
    let numeros4 = [4, 9, 2, 7, 5];
    //Invertimos el orden de los numeros utilizando la funsion "reverse" e imprimimos en la consola
    console.log(numeros4.reverse()); //Recordemos que la funsion "reverse" invierte el orden del arreglo y es por eso que no necesita parametros

/*5. Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 },
                                { producto: "Teléfono", precio: 800 }, 
                                { producto: "Tableta", precio: 600 }], 
    ordénalo por precio en orden ascendente sin modificar el arreglo original.
*/

    //Creamos el arreglo de objectos con datos de los productos y sus precios
    let productos = [
        { producto: "Laptop", precio: 1200 },
        { producto: "Teléfono", precio: 800 },
        { producto: "Tableta", precio: 600 }
    ];
    //Ordenamos los precios de forma ascendente utilizando la funcion de "sort" e imprimimos en la consola
    let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio); //Recordemos que los "..." sirven para crear una copia del arreglo original 
                                                                                // y no modificarlo pero es nesesario encerrar el arreglo original entre corchetes []

//6. Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte su orden y luego ordénalo alfabéticamente.
    //Creamos el arreglo de cadenas de frutas
    let frutas3 = ["manzana", "banana", "kiwi", "fresa"];
    //Invertimos el orden de las frutas utilizando la funsion "reverse"  e imprimimos en la consola
    frutas3.reverse();
    console.log(frutas3);
    //Ordenamos las cadenas de forma alfabetica utilizando la funsion "sort" e imprimimos en la consola
    frutas3.sort((a, b) => a.localeCompare(b));
    console.log(frutas3);
