$(document).ready(function () {
  console.log('Init App')
  var firstnameinputnode = $('#firstname');
  firstnameinputnode.one('blur', validateEmptyField);
  firstnameinputnode.on('input', hola);
  var  emailInputNode = $('#email');
  emailInputNode.on('input',validateEmptyMail);
  var textAreaInputNode = $('textarea');
  textAreaInputNode.on('input', hola);
  //---------------------------------------------------------
  function validateEmptyMail() {
    var nodo = $(this);
    var valorDelInput = $(this).val();
    var ContainsSomething = valorDelInput.indexOf("@");//si hago containsSomething = valorDelInput.indexOf("@" &&".com") no funciona, no se porque.
    if (ContainsSomething == -1) {
      nodo.addClass("border-danger");
       nodo.append("<p>El texto ingresado no es un Email.</p>"); //en la consola el texto se agrega, pero no en la pagina
       }
    nodo.addClass("border-success");
  }

  
  function hola() {
    var nodo = $(this);
    var valorDelInput = $(this).val();
    if (valorDelInput == "") {
      nodo.addClass("border-danger");
       nodo.append("<p>Campo vacio, complete para seguir</p>"); //en la consola el texto se agrega, pero no en la pagina 
       }
    nodo.addClass("border-success");
  }



  
  function validateEmptyField(/*event*/) {
    //while (event.type == 'blur') { //si hago este evento, no se ejecuta la funcion directamente
    var nodo = $(this);
    var valorDelInput = $(this).val();
    if (valorDelInput == "") {
      nodo.addClass("border-danger");
       nodo.append("<p>Campo vacio, complete para seguir</p>");

      //nodoToAppend.html("<p>Campo vacio, complete para seguir</p>");

    }
    nodo.addClass("border-success");
    
  }
})













//------------------------------------------------NO DARLE BOLA A ESTO-------------------------


// Espacio para escribir el código de nuestra aplicación
//$('#button').on('click', handleButtonClick)
//$(document).keydown(handleKeyDown)
//$('ul').append('<li id="3">Item 3</li>')
//$(document).keydown(counter);




//event.type = 'blur', 'click', 'input', 'mouseover' //indica el tipo de evento que esta manejando

    //se va a tener que ejecutar la funcion validateEmptyField pero cuando sea por ejemplo un input

    
/*
function handleButtonClick() {
console.log('hola');
}


function handleKeyDown(event) {
if (event.which === 32) {
console.log('Se presionó la barra espaciadora')
}

}

*/

//$('#exampleInputEmail1').on('input', validateEmptyField);
//function validateEmptyField() {












/*-------------------primer ejercicio------------------------------------------------------------
var contador = 0;

function counter(_event) {

 // contador = $('#input').val();

  if (_event.which === 13) {
    contador++;
    //enterEvent;
    //var enterEvent =
  }
  if (_event.which == 38) {
    contador--;

  }
  if (_event.which == 40) {
    contador = 0;

  }

  $('#input').html(contador);

}





*/
