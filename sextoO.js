console.log("6. Escribir un algoritmo que determine el área y el volúmen de un cilindro: ");
console.log("Ingrese el valor del radio: ");
let radio=5;
console.log("Ingrese el valor de la altura: ");
let altura=20;

const PI=3.14;
let area=(2*PI*radio*altura+(2*PI*Math.pow(radio,2)));
let vol=(PI*Math.pow(radio,2)*altura);


console.log("El área es: ",area," y el volúmen es de: ",vol);
