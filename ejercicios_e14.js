// Arreglo de objectos
const productos = [
    { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
    { id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
    { id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
    { id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
    { id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
    { id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
    { id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
    { id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
    { id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
    { id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
    { id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
    { id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
    { id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
    { id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
    { id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
    { id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
    { id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
    { id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
    { id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
    { id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
    { id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
    { id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
    { id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
    { id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
    { id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
    { id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
    { id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
    { id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
    { id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
    { id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];

// Ejercicios con arreglos de objetos productos

// 1. Crea una función flecha que reciba el arreglo y devuelva un nuevo arreglo solo con los nombres de todos los productos.
const obtenerNombresProductos = (arr) => arr.map(producto => producto.nombre); // Uso de map para extraer nombres, creando un nuevo arreglo
console.log(obtenerNombresProductos(productos)); //Aqui si funsiona
//console.log(("#------------------------obtenerNombresProductos------------------------------------#\n" + obtenerNombresProductos(productos) + "\n #-------------------------------------------------------------------------------# \n")); // Imprime los nombres de los productos

// 2. Crea una función flecha que reciba el arreglo y retorne todos los productos cuya categoría sea "Muebles".
const filtrarMuebles = (arr) => arr.filter(productos => productos.categoria === "Muebles"); // Uso de filter para obtener solo productos de la categoría "Muebles"
console.log(filtrarMuebles(productos)); //Aqui si funsiona
//console.log(("#------------------------filtrarMuebles------------------------------------#\n" + filtrarMuebles(productos) + "\n #-------------------------------------------------------------------------------#")); // Imprime los productos de la categoría "Muebles"

// 3. Crea una función flecha que reciba el arreglo y devuelva el primer producto cuyo precio sea mayor a 1000.
const primerProductoCaro = (arr) => arr.find(productos => productos.precio > 10000); // Uso de find para obtener el primer producto con precio mayor a 1000
console.log(primerProductoCaro(productos)); //Aqui si funsiona
//console.log(("#------------------------primerProductoCaro------------------------------------#\n" + primerProductoCaro(productos) + "\n #-------------------------------------------------------------------------------#")); // Imprime el primer producto con precio mayor a 1000 

// 4. Crea una función flecha que reciba el arreglo y calcule el precio total de todo el inventario (precio × stock de cada producto).
const calcularPrecioTotalInventario = (arr) => arr.reduce((total, producto) => total + (producto.precio * producto.stock), 0); // Uso de reduce para calcular el precio total del inventario utilizando acumulador.
console.log(calcularPrecioTotalInventario(productos)); //Aqui si funsiona
//console.log(("#------------------------calcularPrecioTotalInventario------------------------------------#\n" + calcularPrecioTotalInventario(productos) + "\n #-------------------------------------------------------------------------------#")); // Imprime el primer producto con precio mayor a 1000 

// 5. Crea una función flecha que reciba el arreglo y determine si todos los productos tienen un stock mayor a 0.
const obtenerStockMayorACero = (arr) => arr.every(productos => productos.stock > 0); // Uso de every para verificar si todos los productos tienen stock mayor a 0
console.log(obtenerStockMayorACero(productos)); // Imprime true si todos los productos tienen stock mayor a 0, de lo contrario false

// 6. Crea una función flecha que reciba el arreglo y verifique si al menos un producto pertenece a la categoría "Electrodomésticos".
const verificarCategoriaElectrodomesticos = (arr) => arr.some(productos => productos.categoria === "Electrodomésticos"); // Uso de some para verificar si al menos un producto pertenece a la categoría "Electrodomésticos"
console.log(verificarCategoriaElectrodomesticos(productos)); // Imprime true si al menos un producto pertenece a la categoría "Electrodomésticos", de lo contrario false

//  7. Crea una función flecha que reciba el arreglo y devuelva una nueva lista de productos ordenada por precio de menor a mayor.
const ordenarPorPrecio = (arr) => [...arr].sort((a,b) => a.precio - b.precio); // Uso de sort para ordenar los productos por precio de menor a mayor, creando una copia del arreglo original con el operador spread (...)
console.log(ordenarPorPrecio(productos)); // Imprime los productos ordenados por precio de menor a mayor

// 8. Crea una función flecha que reciba el arreglo y retorne los productos ordenados por nombre en orden alfabético inverso.
const ordenarPorNombreInverso = (arr) => [...arr].sort((a,b) => b.nombre.localeCompare(a.nombre)); // Uso de sort con localeCompare para ordenar los productos por nombre en orden alfabético inverso, creando una copia del arreglo original con el operador spread (...)
console.log(ordenarPorNombreInverso(productos)); // Imprime los productos ordenados por nombre en orden alfabético inverso

// 9. Crea una función flecha que reciba el arreglo y devuelva todos los productos cuyo stock sea menor a 10.
const filtrarStockMenorA10 = (arr) => arr.filter(productos => productos.stock < 10); // Uso de filter para obtener solo productos con stock menor a 10

// 10.Crea una función flecha que reciba el arreglo y obtenga el promedio de los precios de todos los productos.
const calcularPromedioPrecios = (arr) => {
    const totalPrecios = arr.reduce((total, producto) => total + producto.precio, 0); // Uso de reduce para sumar todos los precios
    return totalPrecios / arr.length; // Calcula el promedio dividiendo el total de precios entre la cantidad de productos
};
console.log(calcularPromedioPrecios(productos)); // Imprime el promedio de los precios de todos los productos