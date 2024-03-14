console.log("6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos:")
console.log("Ingrese el primer numero: ")
let numA=-4
console.log("Ingrese el segundo numero: ")
let numB=5

if (numA< 0 || numB< 0) {
    console.log("La suma de los numeros es: ",numA+numB);
}else{
    console.log("La multiplicación de los numeros es: ",numA*numB);
}