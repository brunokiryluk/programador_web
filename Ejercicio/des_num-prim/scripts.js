var arr = [1, 44, 56, 34, 22, 13, 11, 2, 9];
/*
for (var i = 0; i < arr.length; i++) {
    var recorrido = arr[i];
    console.log(recorrido);
}
for (var i = 0; i < arr.length; i++) {
    var recorrido = arr[i] + 1;
    console.log(recorrido);
}
*/





//INTENTO DE SOLUCION//







var resultado;
for (var i = 0; i < arr.length; i++) {

    for (var e = arr[arr.length -1]; e > 0; e--) {
        var validacion = arr[i] / e;
        resultado = validacion % validacion;

        if (resultado != 0) {

            var recorrido = arr[i];
            console.log(recorrido);

        }
    }
};












