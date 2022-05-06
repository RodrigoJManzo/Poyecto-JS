// Genero la Clase Productos

class Productos{
    constructor(nombre, precio, precioIva){
        this.nombre = nombre;
        this.precio = precio;
        this.precioIva = precioIva
    }
}

// Creo un Array Vacio que contendra los productos con el iva calculado
const listaProductos = []

// Establezco una funcion para obtener los datos para el contructor
const nuevoProducto = () => {
    let nombre = document.getElementById("inputTres").value;
    let precio = parseFloat(document.getElementById("inputUno").value);
    let precioIva = calculo ();

    function calculo  ()  {
        return (precio + (21 * precio / 100))};

    
    
    swal(`el precio final de su ${nombre} es $ ${precioIva}`)


    // Creo el nuevo producto con los datos obtenidos anteriormente
    let producto = new Productos (nombre, precio, precioIva);


    // Busco en el LocalStorage si hay productos ya guardados, si es null, hago push al producto recien creado 
    if(localStorage.getItem("producto") == null){
        listaProductos.push(producto);
        localStorage.setItem("producto", JSON.stringify(listaProductos));

    // Si ya existen productos, se genera otro Array, donde conviven los productos existentes y el nuevo    
    }else{
        const listin = JSON.parse(localStorage.getItem("producto"));
        listin.push(producto);
        localStorage.setItem("producto", JSON.stringify(listin));
        console.log(listin)
    }

}

// Se crea la variable boton, para asignar el evento de escuchar el click en el boton del formulario y ejecutar la funcion de creacion de productos 

let boton = document.getElementById("calcular");
boton.addEventListener ("click", nuevoProducto);
console.log(listaProductos);



