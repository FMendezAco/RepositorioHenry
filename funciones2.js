function cuiadadoConElConsoleLog(nombre) {
    console.log(nombre);
}

function otraFuncion(){
    return(
        "El nombrer retornado por la funcion 'cuidadoConElConsoleLog' es : "+
        cuiadadoConElConsoleLog("Camilo")
    );
}

function cuiadadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}