 /* For : sabemos la cantidad maxima exacta de pasos que queremos ejecutar*/
var suma = 0; 
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);


 /* While: No sabemos con certeza cuantos pasos necesitaremos hasta finalizar la ejecucion*/
 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    }       


