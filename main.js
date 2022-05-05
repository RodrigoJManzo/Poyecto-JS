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


let apodo = prompt("Cual es tu Apodo?");

let mensajePersonal = document.createElement("h2");

mensajePersonal.innerHTML = `<h2> Esperamos que hayas encontrado todo lo que buscabas y mucho mas ${apodo} </h2>`;

document . body .append(mensajePersonal);
