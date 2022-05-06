//Creo un Array con los productos que Fifuran en la tienda

const productos = [
    {"nombre":"calzadoDeportivo", id: 1, "precio": 490.99},
    {"nombre":"remeraDeportiva", id: 2, "precio": 190.99 },
    {"nombre":"gorro", id: 3 , "precio": 89.99 },
    {"nombre":"tarjetaRegalo", "id": 4 , "precio": 0 },
    {"nombre":"ticketCine", "id": 5 , "precio": 449.99 },
    {"nombre":"mochilaLaptop", "id": 6 , "precio": 499.99 },
    {"nombre":"headphones", "id": 7 , "precio": 999.99 },
    {"nombre":"sportBag", "id": 8 , "precio": 469.99 }
]

//Genero la funcion para que, tomando los datos ingresados para realizar el calculo, construya un objeto

// function ProductoNuevo (nombre, id, precio) {
//     this.nombre = prompt("Cual es el nombre del Producto?");
//     this.id = prompt("cual es la ID del Producto?");
//     this.precio = prompt("cual es el precio del producto?");  
// }


// // Funcion para agregar mas productos
// const producto = new ProductoNuevo ();


// //Agrego el objeto recientemente creado al Array!!!
// productos.push(producto);
// console.log (productos);

// //funcion para filtrar en la tienda por nombre

// let filtradoPorNombre = prompt("nombre del producto a filtrar?");
// const resultadoPorNombre = productos.filter((el) => el.nombre.includes (filtradoPorNombre));
// let resultadoNom = resultadoPorNombre
// console.log(` el resultado es ${resultadoNom}`);


// //funcion para filtrar en la tienda por precio


// let filtradoPorPrecio = prompt("precio del producto a filtrar?");
// const resultadoPorPrecio = productos.filter((el) => el.nombre.includes(filtradoPorPrecio));
// let resultadoPrec = resultadoPorPrecio
// console.log(`el resultado es ${resultadoPrec}`);


// //funcion de busqueda de productos 

// let buscar = prompt("cual es el nombre del producto a buscar?");
// const resultadoBusqueda = productos.find((el) => el.nombre === buscar);
// let resultadoBusq = resultadoBusqueda
// console.log(`el resultado es ${resultadoBusq}`);
