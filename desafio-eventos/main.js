/*var inputText = document.getElementById('input-text');
inputText.onblur = hola;
function hola(_event) {
    var miNodo = _event.target; //valido el campo donde fue disparado el evento
    console.log('El evento onblur fue disparado sobre el campo con id ' + miNodo.id);
    var valorDeNodo = miNodo.value;
    if (valorDeNodo == "") {
       miNodo.className = "is-invalid" //rojo
    }else{
        inputNode.className = "is-valid" //verde
    }
}

*/

var inputText = document.getElementById('input-text');
inputText.onblur = hola;
function hola(_event) {
    var miInput = _event.target; //valido el campo donde fue disparado el evento
    var valorDelInput = miInput.value;
    if (valorDelInput.indexOf('@') && valorDelInput.indexOf('.')) {
        miInput.className = "border border-danger"
    }else{
        miInput.className = "border border-success"
    }
}





















/*  

var button  = document.getElementById('input-text');
button.onblur = function validarNombre(_event){
  //tengo que validar el campo input
  var inputNode = _event.target; //me devuelve el nodo

  //si es vacio tengo que poner en rojo
   var valorDelInput = inputNode.value; // value es una propiedad del nodo que tiene lo que el usuario escribio
   if (valorDelInput == '') {
     inputNode.className = "is-invalid"; //rojo
   }else{
     inputNode.className = "is-valid" //verde
   }
   
  //si tiene un valor tengo que poner en verde 
}

*/

