var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

//console.log(listaDeCompras);
//listaDeCompras [1]
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);


// Este es otro ejemplo, los arrayes tienen muchos elementos//
// Metodo Longth, para saber la longitud//
const miArray = ["David" , "Juan", "Kevin"];
var nombre = miArray.length;
console.log(cant) //Imprime : 3

//Para acceder a los elementos: Indice//

const Array = ["David" , "Juan", "Kevin"];
var nombre = Array[1];
console.log(nombre); // Imprime : Juan//

 nombre = Array[2];
console.log(nombre); // Imprime: Kevin//

 nombre = Array[3];
console.log(nombre); // Imprime: Undefined

// Metodo Push() : Sirve para agregar un elemento al final de mi lista //
miArray.push("Carloas");
console.log(miArray);
//imprime: ["David", "Juan", "kevin", "Carlos"]


//Metodo unshift() : Sirve para agregar un elemento al inicio de mi lista//
miArray.unshift("Agustin");
console.log(miArray);
//imprime: ["Agustin","David", "Juan", "kevin", "Carlos"]


// Metodo Pop() : elimina y devuelve el utlimo elemento de un arreglo//
const miiArray = ["David" , "Juan", "Kevin"];
console.log(miArray);
//imprime: ["David", "Juan", "kevin", "Carlos"]

let final = miArray.pop() // no se agrega nada en los parentesis 
console.log(miArray);
//imprime: ["David", "Juan"]
console.log(final);
//Imprime: Kevin

// Metodo shift() elimina y devuelve el primer elemento de un arreglo//
let inicio = miArray.shift();
console.log(miArray);
//Imprime : ["Juan"]

//Metodo For : Trabaja con un numero determinado de repeticiones (Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.)

var array = [1,2,3,4,5];
for (var i = 0; i < array.length; i++) [
    console.log(array[i])
]
//EJEMPLO 2
function encontralaLetraP(string){
    var letras = string.split('');
    for(let i = 1; i < letras.length; i++){
        if (letras[1]=== 'p'){
            console.log('Si tiene a P');
        }
    }
}
EncontraLetraP('JavaScript');
encontrarLetraP('Henry');

//Bucle While: Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
var arr = [];
while (arr.length< 5)[
    arr.push('BOOM')
]
console.log(arr);