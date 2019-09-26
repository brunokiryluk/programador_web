 * convertir el Array en JSON para guardarlo en el localStorge. La función tiene que validar 
 * los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.
Datos de prueba:

*/


var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']

function setLocalList(_key, _array) {
    if (typeof _key == 'string' && Array.isArray(_array)) {
        var stringifyOfArr = JSON.stringify(_array);
        localStorage.setItem(_key, _array);
        return stringifyOfArr;
    }
}
 

setLocalList('studentsList', testList)




/*La función tiene que recibir como parámetro una key y buscar en el
 localStorage por esa key devolviendo un objeto de JavaScript, si no existe el 
 elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe, en caso de que
  alguno sea incorrecto no debe romper ni borrar nada. */
   function getLocalList(_key){
       var hola = localStorage.getItem(_key);
       if (hola != null) {
           var parseOfTestList = JSON.parse(testList);
           return parseOfTestList;
       }
         var arr = [];
         return arr; 
      

  }


var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
  //JSON.parse

// localStorage









 // Guarda la lista en el localStorage en formato JSON
//Documentación:

//JSON.stringify
//localStorage 
/*

function includesText(string1,string2) {
     var indexOfSecond = string2.indexOf(string1);
    if (indexOfSecond  >= 0) {
        return true;
    }

        return false;
    }
    */