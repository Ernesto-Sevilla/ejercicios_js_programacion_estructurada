// Dado el siguiente arreglo de objetos que representan mascotas:
const mascota = [
    { nombre: "Luna", edad: 8, tipo: "Perro", peso: 11.5 },
    { nombre: "Monky", edad: 12, tipo: "Mono", peso: 15.5 },
    { nombre: "Luphy", edad: 3, tipo: "Gato", peso: 158.5 },
    { nombre: "Zoro", edad: 4, tipo: "Zorro", peso: 1414.5 },
    { nombre: "Nami", edad: 9, tipo: "Panda", peso: 15.5 },
    { nombre: "Ussop", edad: 6, tipo: "Warden", peso: 17.5 },
    { nombre: "Frankie", edad: 26, tipo: "Aldeano", peso: 18.5 },
    { nombre: "Brook", edad: 6, tipo: "Cerdo", peso: 19.5 },
    { nombre: "Eliab", edad: 10, tipo: "Pechan", peso: 15.5 },
    { nombre: "Loro", edad: 2, tipo: "Rana", peso: 14.5 },
    { nombre: "Toro", edad: 15, tipo: "Luciernaga", peso: 1.5 },
    { nombre: "Puma", edad: 13, tipo: "Tucan", peso: 12.5 },
    { nombre: "Toribio", edad: 4, tipo: "Lobo", peso: 145.5 },
    { nombre: "Salmon", edad: 2, tipo: "Aldeano verde", peso: 15.5 },
    { nombre: "Sáilormoon", edad: 9, tipo: "Golem de hierro", peso: 18.5 },
    { nombre: "Purly", edad: 3, tipo: "Hollow", peso: 10.5 }
];

// #--------------------------------------------------------------#
// 1.Ordenar las mascotas por  de forma ascendente usando sort.
// 2.Ordenar las mascotas por  de forma alfabética usando sort.
// 3.Ordenar las mascotas por  de forma descendente usando sort.
// 4.Ordenar las mascotas por  alfabéticamente y, si tienen el mismo tipo, por  ascendente usando sort.

// #--------------------------------------------------------------#

    // Arreglo original
        console.log("#------------------------------------------------------------#\n",  "Arreglo original\n", mascota, "\n#-----------------------------------------------------------#"); // Imprimimos el arreglo original

// 5.Invertir el orden del arreglo de mascotas usando reverse.
    const ordenInvertido = [...mascota].reverse(); // Creamos una copia del arreglo original para no modificarlo directamente
    console.log("#------------------------------------------------------------#\n",  "Arreglo invertido\n", ordenInvertido, "\n#------------------------------------------------------------#"); // Imprimimos el arreglo invertido

// 6.Crear un nuevo arreglo con los nombres de las mascotas en mayúsculas usando map.
    const nombresMayusculas = [...mascota.map(nombres => nombres.nombre.toUpperCase())];
    console.log("#------------------------------------------------------------#\n",  "Arreglo en mayusculas\n", nombresMayusculas, "\n#------------------------------------------------------------#"); // Imprimimos el arreglo en mayusculas
// 7.Calcular el peso total de todas las mascotas usando reduce.
    const pesoTotal = [...mascota].reduce((pesototal, mascota) => pesototal + mascota.peso, 0); // Creamosuna copia del arreglo y utilizamos la funcion de reduce para sumar los pesos de todos los animales 
    console.log("#------------------------------------------------------------#\n",  "Peso total de las mascotas\n", pesoTotal, "\n#------------------------------------------------------------#"); // Imprimimos el peso total de las mascotas

// 8.Crear un nuevo arreglo con solo las mascotas que son perros usando filter.
    const soloPerros = [...mascota].filter(perros => perros.tipo === "Perro"); // Creamos una copia del arreglo y utilizamos la funcion de filter para filtrar solo los perros
    console.log("#------------------------------------------------------------#\n",  "Solo perros\n", soloPerros, "\n#------------------------------------------------------------#"); // Imprimimos el arreglo con solo los perros

/*
Notas:
- Usamos el operador de propagación (...) para crear copias de los arreglos originales antes de aplicar métodos que modifican el arreglo, como reverse y sort. Esto asegura que el arreglo original permanezca intacto.
- Cada operación está claramente separada y comentada para facilitar la comprensión del código.
- Utilizamos \n que es un caracter especial que representa un salto de línea en las cadenas de texto para mejorar la legibilidad de la salida en la consola.
- El operador de propagación (...) es fenomenal ya que es flexible puedo escribir el resto del codigo dentro o fuera de los corchetes. 
*/