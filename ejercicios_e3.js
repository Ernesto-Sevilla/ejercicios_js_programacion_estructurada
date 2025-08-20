// Creamos un objecto que almacena información personal.
const persona = {
    nombre: "Ernesto",
    edad: 18,
    // Dentro del objecto agregamos otro objecto que almacena la dirección.
    direccion: {
        ciudad: "Acoyapa",
        codigoPostal: 12345
    },
    // Agregamos un arreglo que almacena los hobbies.
    hobbies: ["programar", "leer", "jugar videojuegos"]
};

// Creamos funcion flecha para mostrar el nobre de una persona.
const mostrarNombre = (persona) => persona.nombre;
console.log(mostrarNombre(persona));

// Creamos funcion flecha para mostrar la edad de una persona.
const mostrarEdad = (persona) => persona.edad;
console.log(mostrarEdad(persona))

// Creamos funcion flecha para mostrar la ciudad de una persona.
const mostrarCiudad = (persona) => persona.direccion.ciudad;
console.log(mostrarCiudad(persona));

// Creamos funcion flecha para mostrar el codigo postal utilizando corchetes.
const mostrarCodigoPostal = (persona) => persona.direccion["codigoPostal"];
console.log(mostrarCodigoPostal(persona));

// Creamos funcion flecha para mostrar el segundo hobbie de una persona.
const mostrarHobbies = (persona) => persona.hobbies[1];
console.log(mostrarHobbies(persona));

// Función flecha
const multiplicarFlecha = (a, b) => a * b;