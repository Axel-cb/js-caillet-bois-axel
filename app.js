const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicacion = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const division = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
let nombre;
let operacion;
let continuar;
while (continuar != "no") {
    nombre = prompt("Ingresá tu nombre");
    if (nombre !== "" && nombre !== null) {
        operacion = prompt(`¡Hola ${nombre}!  bienvenido, soy la calculadora y te voy a estar ayudando en tus problemas matemáticos \n¿Que operación deseas realizar? ingresá el número segun corresponda a la operación \n 1: Suma \n 2:Resta \n 3:Multiplicación \n 4:División`);


        if (operacion == 1) {
            let num1 = prompt("Ingresá el primer número para sumar.");
            let num2 = prompt("Segundo numero para sumar");
            let resultado = sumar(num1, num2);
            continuar = prompt(`El resultado es ${resultado}\n ¿Desea continuar operando? Responda si/no.`);
        }
        else if (operacion == 2) {
            let num1 = prompt("Ingresá el primer número para restar.");
            let num2 = prompt("Segundo número para restar.");
            let resultado = resta(num1, num2);
            continuar = prompt(`El resultado es ${resultado}\n ¿Desea continuar operando? Responda si/no.`);
        }
        else if (operacion == 3) {
            let num1 = prompt("Ingresá el primer número para multiplicar.");
            let num2 = prompt("Ingresá el segundo número.");
            let resultado = multiplicacion(num1, num2);
            continuar = prompt(`El resultado es ${resultado}\n ¿Desea continuar operando? Responda si/no.`);
        }
        else if (operacion == 4) {
            let num1 = prompt("Ingresá el primer número para dividir");
            let num2 = prompt("Ingresá el segundo.");
            let resultado = division(num1, num2);
            continuar = prompt(`El resultado es ${resultado}\n ¿Desea continuar operando? Responda si/no.`);
        } else {
            alert("Introduzca un valor válido")
        }
        if (continuar == "si") { } else { alert("!Hasta la próxima!") }
    } else { alert("Por favor, ingresá tu nombre") }
}

