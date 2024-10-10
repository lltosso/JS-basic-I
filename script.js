//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
let nombre ="Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5";
console.log(nombre);


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let saludo = 'Hola Mundo';
console.log('Hola Mundo');

let numero ='50';
let x= "50";
console.log(x);

let esMayorDeEdad = true; 
let esMenor = false;
console.log(esMayorDeEdad);{
if (esMayorDeEdad < 30) {
    console.log("Mayor de Edad");
}
    else {
        console.log("Menor de Edad");
    }
}

let apodo = "Juan";
apodo = null;
console.log(apodo);

let Apple;
console.log(Apple);



//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let suma = 10;
let suma1 = 5;
let resultado = suma + suma1;
console.log(resultado);

//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resta = 10;
let resta1 = 5;
let igual = resta - resta1;
console.log(igual);


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let multiplica = 20;
let multiplica1 = 5;
let igual1 = multiplica * multiplica1;
console.log(igual1);



//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let divide = 20;
let divide1 = 5;
let igual2 = divide / divide1;
console.log(igual2);



//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let coche = 5;
let coche2 = 6;
let resultadoCoche = coche === coche2;
console.log(resultadoCoche);


// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let Ordenador = 7;
let Ordenador2 = 6;
let resultadoOrdenador = Ordenador > Ordenador2;
console.log(resultadoOrdenador);

//Ejercicio 10: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15;
let num2 = 20;
let resultadonum1 = num1 < num2;
console.log(resultadonum1);

//Ejercicio 11: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1;
let num3AsString = "1";
let result = num3 === num3AsString;
console.log(result);



//Ejercicio 12: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
let result2 = 20;
let result3 = 20;
let total = result2 === result3;
console.log(total);


//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let name = "Lluis Alberto";
let apellido = "Tosso Valencia";
let nameCompleto = name + " " + apellido;
console.log(nameCompleto);





//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 &&  b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 ||  b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 ||  b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
