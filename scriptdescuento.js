// Creo la Clase del Producto

class ProductoConDescuento{
    constructor(nombre, precio, descuento, precioDescuento){
        this.nombre = nombre;
        this.precio = precio
        this.descuento = descuento;
        this.precioDescuento = precioDescuento;
    }

}

// creo array vacio para almacenar los productos calculados

const listaProductDesc = []

// creo una funcion para obtener datos del constructor

const nuevoProductDesc = () => {
    let nombre = document.getElementById("inputTres").value;
    let precio = parseInt(document.getElementById("inputUno").value);
    let descuento = parseInt(document.getElementById("inputDos").value);
    let precioDescuento = calculo();

    function calculo ()  {
        return(precio - (descuento * precio / 100 ));
    }

    alert(`El precio final de ${nombre} es $ ${precioDescuento}`)

    // creo el nuevo producto para el array

    let productoDesc = new ProductoConDescuento (nombre, precio, descuento, precioDescuento);

    // Busco en el LocalStorage si hay productos ya guardados, si es null, hago push al producto recien creado

    if(localStorage.getItem("productoDesc") == null){
        listaProductDesc.push(productoDesc);
        localStorage.setItem("productoDesc", JSON.stringify(listaProductDesc));
    
    //si ya existe el array 
    }else{
        const listDesc = JSON.parse(localStorage.getItem("productoDesc"));
        listDesc.push(productoDesc);
        localStorage.setItem("productoDesc", JSON.stringify(listDesc));
        console.log(listDesc);
    }

}

  //creo el evento para escuchar el click en el boton del formulario

  let boton = document.getElementById("calcular");
  boton.addEventListener("click", nuevoProductDesc);
  console.log(listaProductDesc);