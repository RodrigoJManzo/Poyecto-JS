//variables
const listaProductos = document.querySelector(`#lista`)


fetch(`../data.json`)
    .then((respuesta)=>respuesta.json())
    .then((datos)=> {
        datos.forEach((producto)=>{
            const li = document.createElement(`li`)
            li.innerHTML= `
            <h3>${producto.nombre}</h3>
            <p> $ ${producto.precio}</p>
            <p> ID: ${producto.id}</p>
            `

            listaProductos.append(li)
        })
    })











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
