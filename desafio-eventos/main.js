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
inputText.onblur = validateMailInput;
function validateMailInput(_event) {
  //uso variable 'miInput' porque es local, podria usar inputText pero no es una buena practica. Que sea local hace q sea pura

  var miInput = _event.target; //valido el campo donde fue disparado el evento
  var valorDelInput = miInput.value;
  var containsSomething = valorDelInput.indexOf('@')  && valorDelInput.indexOf('.com')
  if (containsSomething != -1) {
    miInput.classList.add("border-success");
    miInput.classList.remove("border-danger")
    } else {
      miInput.classList.add("border-danger");
      miInput.classList.remove("border-success");
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

