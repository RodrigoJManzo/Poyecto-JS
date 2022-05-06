let bienvenida = swal("Hola, como te llamas?",{
    button: {text: "Yeah!", closeModal: true},
    content: "input",
    input: "text",
    icon: "info"
})
    .then((nome) => {
        swal(`gracias por visitar nuestra pagina ${nome}`);
    });

    nome = bienvenida

    
let titulo = document.getElementById("modificable");

titulo.innerText = `BIENVENIDO A NUESTRO SITIO ${bienvenida}`;


let apodo = prompt("Cual es tu Apodo?").toUpperCase();

let mensajePersonal = document.createElement("h2");

mensajePersonal.innerHTML = `<h2> ESPERAMOS QUE HAYAS ENCONTRADO TODO LO QUE BUSCABAS Y MUCHO MAS ${apodo} </h2>`;

document . body .append(mensajePersonal);
