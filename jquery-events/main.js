$(document).ready(function () {
  console.log('Init App')
  var firstnameinputnode = $('#firstname');
  firstnameinputnode.one('blur', validateEmptyField); //agregar los one. de cada campo
  var emailInputNode = $('#email');
  emailInputNode.one('blur', validateEmptyMail);
  var textAreaInputNode = $('#textarea');
  textAreaInputNode.one('blur', validateEmptyField);
  addButton();
})
//---------------------------------------------------------

function validateEmptyField(_event) {
  var nodo = $(this);
  var valorDelInput = $(this).val();
  nodo.next().remove();
  if (valorDelInput == "") {
    nodo.addClass("border-danger");
    nodo.removeClass("border-success");
    var parentNode = nodo.parent();
    parentNode.append("<p>Campo vacio, complete para seguir</p>");
  } else {
    nodo.addClass("border-success");
    nodo.removeClass("border-danger");
    var parentNode = nodo.parent();
    parentNode.append("<p>El campo esta completo, segui asi compa!</p>");

  } if (_event.type == 'blur') {
    nodo.on('input', validateEmptyField);
  } console.log('AAAAAAAAA');
  //solucion. Luego del primper blur que se ejecuta UNA vez, ahora pasa a darse el evento input con esta
  addButton();
  console.log('AAAAAAAAAAAA');

}



function validateEmptyMail(_event) {
  var nodo = $(this);
  nodo.next().remove();
  var valorDelInput = $(this).val();
  var ContainsSomething = valorDelInput.indexOf("@") && valorDelInput.indexOf('.com');//si hago containsSomething = valorDelInput.indexOf("@" &&".com") no funciona, no se porque.
  if (ContainsSomething == -1) {
    nodo.addClass("border-danger");
    nodo.removeClass("border-success");
    var parentNode = nodo.parent();
    parentNode.append("<p>El texto ingresado no es un Email.</p>"); //en la consola el texto se agrega, pero no en la pagina
  } else {
    nodo.addClass("border-success");
    nodo.removeClass('border-danger');
    var parentNode = nodo.parent();
    parentNode.append("<p>El texto ingresado ahora es un mail! Segui asi</p>");
  }
  if (_event.type == 'blur') {
    nodo.on('input', validateEmptyMail);
  } console.log('AAA');

  addButton();
  console.log('BBBBBBBBBBBBBBB');

}

function addButton() {
  var firstnameinputnode = $('#firstname');
  var emailInputNode = $('#email');
  var textAreaInputNode = $('#textarea');
  var button = $('#button');
  var nameContainsClass = firstnameinputnode.hasClass("border-success");
  var lastNameContainsClass = emailInputNode.hasClass("border-success");
  var dniContainsClass = textAreaInputNode.hasClass("border-success");
  //var botonAgregarAlumno = document.getElementById('myButton')
  if (nameContainsClass && lastNameContainsClass && dniContainsClass) {
    console.log('las clases contienen color verde');
    button.attr('disabled', false);
    //button.disabled = false;
    console.log('BBBBBBBBBB');

  
  }else{
    console.log('no funciona');
    
  }
  
}





/*var containsClass = firstnameinputnode.classList.contains("border-success") && emailInputNode.classList.contains("border-success") && textAreaInputNode.classList.contains("border-success");
if (containsClass) {
  button.attr('disabled', false);
}*/