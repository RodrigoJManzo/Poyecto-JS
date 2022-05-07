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


console.log(productos.map(x => x.id))

console.log(productos[0].id)



//variables

const addToCart = document.getElementsByClassName("addToCart");

const cart = document.querySelector("#cart");

const agregadoCarrito = [];

//asignar funciones a los botones

for(let i=0; i < addToCart.length; i++){
    let boton = addToCart[i];
    boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e){
    let boton = e.target;
    console.log(boton);
    for(const {nombre: a, id: b} of productos){
        let prodName = a;
        let prodId = b;
        console.log(`nombre ${a}, id ${b}`)
        let cartItem = productos.find((el) => el.id === prodId);
        console.log(cartItem)
    }
   }














// const cart = document.querySelector("#cart");
// const agregadoCarrito = [];

// let btncart1 = document.querySelector("#btnCart1");
// let buscar1 = productos.find((el) => el.id === 1);


// let btncart2 = document.querySelector("#btnCart2");
// let buscar2 = productos.find((el) => el.id === 2)

// let btncart3 = document.querySelector("#btnCart3");
// let buscar3 = productos.find((el) => el.id === 3)


// let btncart4 = document.querySelector("#btnCart4");
// let buscar4 = productos.find((el) => el.id === 4)

// let btncart5 = document.querySelector("#btnCart5");
// let buscar5 = productos.find((el) => el.id === 5)

// let btncart6 = document.querySelector("#btnCart6");
// let buscar6 = productos.find((el) => el.id === 6)

// let btncart7 = document.querySelector("#btnCart7");
// let buscar7 = productos.find((el) => el.id === 7)

// let btncart8 = document.querySelector("#btnCart8");
// let buscar8 = productos.find((el) => el.id === 8)


// // Por cada boton, agrego una funcion para que encuentre el objeto por su id en el array

// let prodId1 = buscar1.id;
// let prodName1 = buscar1.nombre;
// let prodPrecio1 = buscar1.precio;

// let prodId2 = buscar2.id;
// let prodName2 = buscar2.nombre;
// let prodPrecio2 = buscar2.precio;

// let prodId3 = buscar3.id;
// let prodName3 = buscar3.nombre;
// let prodPrecio3 = buscar3.precio;

// let prodId4 = buscar4.id;
// let prodName4 = buscar4.nombre;
// let prodPrecio4 = buscar4.precio;

// let prodId5 = buscar5.id;
// let prodName5 = buscar5.nombre;
// let prodPrecio5 = buscar5.precio;

// let prodId6 = buscar6.id;
// let prodName6 = buscar6.nombre;
// let prodPrecio6 = buscar6.precio;

// let prodId7 = buscar7.id;
// let prodName7 = buscar7.nombre;
// let prodPrecio7 = buscar7.precio;

// let prodId8 = buscar8.id;
// let prodName8 = buscar8.nombre;
// let prodPrecio8 = buscar8.precio;

// btncart1.addEventListener("click", add = () => {agregadoCarrito.push(buscar1)});
// btncart2.addEventListener("click", add = () => {agregadoCarrito.push(buscar2)});
// btncart3.addEventListener("click", add = () => {agregadoCarrito.push(buscar3)});
// btncart4.addEventListener("click", add = () => {agregadoCarrito.push(buscar4)});
// btncart5.addEventListener("click", add = () => {agregadoCarrito.push(buscar5)});
// btncart6.addEventListener("click", add = () => {agregadoCarrito.push(buscar6)});
// btncart7.addEventListener("click", add = () => {agregadoCarrito.push(buscar7)});
// btncart8.addEventListener("click", add = () => {agregadoCarrito.push(buscar8)});

// // ver si los productos ya estan
// for(let i=0; i <agregadoCarrito.length; i++){
//     if(agregadoCarrito[i].getAttribute("id") === prodId1 || prodId2 || prodId3 || prodId4 || prodId5 || prodId6 || prodId7 || prodId8){
//     swal(`este producto ya esta en su carro`);        
//     }
// }











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
