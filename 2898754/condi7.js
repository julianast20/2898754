console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no:")
console.log("Ingrese un año: ")
let año=2023

    if ((año % 4 == 0 && año % 100 != 0) || (año % 400 == 0)) {
        console.log(año,"si es un año bisiesto");
    } else {
        console.log(año,"no es un año bisiesto");
    }
    