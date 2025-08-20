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

// Vamos a trabajar coo funciones flechas utilizando el objecto universidad.

const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// Creamos funcion flecha que muestre el nombre de la universidad.
const mostrarNombreUniversidad = (universidad) => universidad.nombre;
console.log(mostrarNombreUniversidad(universidad));

// Creamos funcion flecha que muestre la calle de la universidad.
const mostrarCalleUniversidad = (universidad) => universidad.ubicacion.direccion.calle;
console.log(mostrarCalleUniversidad(universidad));

// Creamos funcion flecha que muestre el nombre de la primera facultad.
const mostrarPrimeraFacultad = (universidad) => universidad.facultades[0].nombre;
console.log(mostrarPrimeraFacultad(universidad));

// Creamos funcion flecha que muestre el nombre de la segunda carrera de la primera facultad.
const mostrarSegundaCarreraPrimeraFacultad = (universidad) => universidad.facultades[0].carreras[1].nombre;
console.log(mostrarSegundaCarreraPrimeraFacultad(universidad));

// Creamos funcion flecha que muestre el nombre del primer estudiante de la carrera de informatica.
const mostrarPrimerNombreEstudianteInformatica = (universidad) => universidad.facultades[0].carreras[0].estudiantes[0].nombre;
console.log(mostrarPrimerNombreEstudianteInformatica(universidad));

// Creamos funcion flecha que muestre el hobbie de Laura.
const mostrarHobbieLaura = (universidad) => universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1];
console.log(mostrarHobbieLaura(universidad));

// Creamos funcion flecha que muestre la edad de sofia.
const mostrarEdadSofia = (universidad) => universidad.facultades[0].carreras[1].estudiantes[0].edad;
console.log(mostrarEdadSofia(universidad));

// Creamos funcion flecha que muestre el hobie del estudiante de la carrera de derecho penal.
const mostrarHobbieEstudianteDerechoPenal = (universidad) => universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0];
console.log(mostrarHobbieEstudianteDerechoPenal(universidad));