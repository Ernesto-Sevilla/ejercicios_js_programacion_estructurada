// Crear una cola
let cola = []; // Los arreglos empiezan vacíos

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(), "ha sido eliminado"); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(), "ha sido eliminado"); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "ha sido eliminado"); // "Tarea 3"
console.log(cola); // []
console.log(cola.shift(), "ha sido eliminado"); // undefined (cola vacía)
console.log(cola); // []


// Crear una pila
let pila = [];

// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop(), "ha sido usado"); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop(), "ha sido usado"); // "Plato 2"
console.log(pila); // ["Plato 1"]   

// Arreglo para la cola
let colaTareas = [];

// Accion para agregar al final
const agregarAlFinal = (tarea) => {
colaTareas.push(tarea);
console.log(`Tarea agregada": ${tarea}. Cola actual: ${colaTareas}`);
};

// Accion para remover del inicio
const removerDelInicio = () => {
    if (colaTareas.length === 0) {
        console.log("Cola vacia");
        return null;
    }
    const tareaProcesada = colaTareas.shift();
    console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}`);
    return tareaProcesada;
};

// Simulacion del proceso
agregarAlFinal("Tarea A"); // Cola: ["Tarea A"]
agregarAlFinal("Tarea B"); // Cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // Cola: ["Tarea A", "Tarea B", "Tarea C"]

removerDelInicio(); // Procesa "Tarea A", Cola: ["Tarea B", "Tarea C"]
removerDelInicio(); // Procesa "Tarea B", Cola: ["Tarea C"]
removerDelInicio(); // Procesa "Tarea C", Cola: []

// Ejemplo 2: Cola con Límite de Tamaño para Mensajes

//Arreglo para cola con limite
let colaMensajes = [];
const tamanoMaximo = 5;

// Accion para insertar al final (Flecha)
const insertarAlFinal = (mensaje) => {
    colaMensajes.push(mensaje);
    if (colaMensajes.length >= tamanoMaximo) {
        const mensajeEliminado = colaMensajes.shift();
        console.log(`Límite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}`);
    }else{
        console.log(`Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}`);
    }
};

// Accion para extraer del inicio (Flecha)
const estraerDelInicio = () => {
    if (colaMensajes.length === 0) {
        console.log("Cola vacia.");
        return null;
    }
    const mensajeExtraido = colaMensajes.shift();
    console.log(`Mensaje extraido: ${mensajeExtraido}. Cola actual: ${colaMensajes}`);
    return mensajeExtraido;
};

// Simulacion del proceso
insertarAlFinal("Mensaje 1"); // Cola: ["Mensaje 1"]
insertarAlFinal("Mensaje 2"); // Cola: ["Mensaje 1", "Mensaje 2"]
insertarAlFinal("Mensaje 3"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3"]
insertarAlFinal("Mensaje 4"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]

// Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]
insertarAlFinal("Mensaje 5");
// Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]
insertarAlFinal("Mensaje 6");
// Límite excedido. elimina "Mensaje 1", Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]
extraerDelInicio(); // Extrae "Mensaje 2", Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]



// Ejemplo 3: Cola para Simular una Línea de Espera

// Arreglo para la cola
let lineaEspera = [];

// Accion para unir al final (Flecha)
const unirAlFinal = (persona) => {
    lineaEspera.push(persona);
    console.log(`Persona unida: ${persona}. Linea actual: ${lineaEspera}`);
};

// Accion para atender al inicio (Flecha)
const atenderAlInicio = () => {
    if (lineaEspera.length === 0) {
        console.log("Linea vacia, nadie para atender");
        return null;
    }
    const personaAtendida = lineaEspera.shift();
    console.log(`Persona atendida: ${personaAtendida}. Linea actual: ${lineaEspera}`);
    return personaAtendida;
};

// Simulacion del proceso
unirAlFinal("Persona X");
unirAlFinal("Persona Y");
unirAlFinal("Persona Z");

atenderAlInicio(); // Atiende a "Persona X"
atenderAlInicio(); // Atiende a "Persona Y"
atenderAlInicio(); // Atiende a "Persona Z"
atenderAlInicio(); // Linea vacia, nadie para atender


// Ejemplo 4: Historial de Navegación Web

// Arreglo para la pila
let historialPaginas = [];

// Accion para agregar pagina (flecha)
const agregarUltimaPagina = (url) => {
    historialPaginas.push(url);
    console.log(`Pagina visitada: ${url}. Historial actual: ${historialPaginas}`);
};

// Accion para retroceder (flecha)
const retrocederPagina = () => {
    if (historialPaginas.length === 0) {
        console.log("Historial vacio");
        return null;
    }
    const pagina = historialPaginas.pop();
    console.log(`Retrocediendo a: ${pagina}. Historial actual: ${historialPaginas}`);
    return pagina;
};

// Simulacion del proceso
agregarUltimaPagina("inicio.com"); // Pagina visitada: inicio.com. Historial actual: ["inicio.com"]
agregarUltimaPagina("articulos.com"); // pagina visitada: articulos.com. Historial actual: ["inicio.com", "articulos.com"]
agregarUltimaPagina("detalles.com"); // pagina visitada: detalles.com. Historial actual: ["inicio.com", "articulos.com", "detalles.com"]

retrocederPagina();                 // Retrocediendo a: detalles.com. Historial actual: ["inicio.com", "articulos.com"]
retrocederPagina();                 // Retrocediendo a: articulos.com. Historial actual: ["inicio.com"]


// Ejemplo 5: Gestión de Notificaciones Emergentes 

// Arreglo para la pila
let pilaNotificaciones = [];

// Accion para mostrar notificacion (Flecha)
const mostrarNotificacion = (mensaje) => {
    pilaNotificaciones.push(mensaje);
    console.log(`Notificación: ${mensaje}. Pila: ${pilaNotificaciones}`);
};

// Accion para cerrar notificacion (Flecha)
const cerrarNotificacion = () => {
    if (pilaNotificaciones.length === 0) {
        console.log("No hay notificaciones.");
        return null;
    }
    const notificacion = pilaNotificaciones.pop();
    console.log(`Cerrada: ${notificacion}. Pila: ${pilaNotificaciones}`);
    return notificacion;
};

// Simulacion del proceso
mostrarNotificacion("Mensaje nuevo"); // Pila: ["Mensaje nuevo"]. Pila: ["Mensaje nuevo"]
mostrarNotificacion("BAteria baja");  // Pila: ["Mensaje nuevo", "Batería baja"]. pila: ["Mensaje nuevo", "Batería baja"]
mostrarNotificacion("Actualización"); // Pila: ["Mensaje nuevo", "Batería baja", "Actualización"]. pila: ["Mensaje nuevo", "Batería baja", "Actualización"]

cerrarNotificacion(); // Cierra "Actualización". Pila: ["Mensaje nuevo", "Batería baja"]
cerrarNotificacion(); // Cierra "Batería baja". Pila: ["Mensaje nuevo"]