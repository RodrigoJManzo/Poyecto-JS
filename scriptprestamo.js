
// creo una clase para identificar a las personas que solicitan el prestamo
class Persona{
    constructor (nombre, monto, interes, cuotas, montoTotal){
        this.nombre = nombre;
        this.monto = monto;
        this.interes = interes;
        this.cuotas = cuotas;
        this.montoTotal = montoTotal;
    }
}

// se crea un array para asentar a los prestamos solicitados

const prestamos = []

// funcion para obtener los datos, calcular y generar los usuarios

const nuevaPersona = () => {
    let nombre = document.getElementById("inputCuatro").value;
    let monto = parseFloat(document.getElementById("inputUno").value);
    let interes = parseFloat(document.getElementById("inputTres").value);
    let cuotas = parseInt(document.getElementById("inputDos").value);
    let montoTotal = calculo();

    function calculo () {
        return(monto + (interes * monto /100))
    }

alert(`El monto total a pagar en ${cuotas} cuotas es ${montoTotal}`)

montoTotal > 10000 ? console.log(`Sacando cantidades mas grandes, puedes obtener mejores beneficios`) : console.log(`Con el monto solicitado no obtienes beneficios`);

//se crea el nuevo producto con los datos ingresados
let persona1 = new Persona (nombre, monto, interes, cuotas, montoTotal);

//si no hay un array en el storage se crea uno
if( localStorage.getItem("persona1") == null){
prestamos.push(persona1);
localStorage.setItem ("persona1", JSON.stringify(prestamos));

//si ya esta creado el array
}else{
    const loan = JSON.parse(localStorage.getItem("persona1"));
    loan.push(persona1);
    localStorage.setItem("persona1", JSON.stringify(prestamos));
}
}

//boton para dar paso a la funcion de crear personas y calcular los prestamos
let boton = document.getElementById("calcular");
boton.addEventListener("click", nuevaPersona);
console.log(prestamos);

