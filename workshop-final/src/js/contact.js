function validateEmptyField(_event) {

  var nodo = $(this);
  var valorDelInput = $(this).val();
  nodo.next().remove();
  if (valorDelInput == "") {
    nodo.addClass("border-danger");
    nodo.removeClass("border-success");
    var parentNode = nodo.parent();
    parentNode.append("<p>Campo vacio, compvare para seguir</p>");
  } else {
    nodo.addClass("border-success");
    nodo.removeClass("border-danger");
    var parentNode = nodo.parent();
    parentNode.append("<p>El campo esta compvaro, segui asi compa!</p>");

  } if (_event.type == 'blur') {
    nodo.on('input', validateEmptyField);
  }

  addButton();
}

function validateEmptyMail(_event) {
  var nodo = $(this);
  nodo.next().remove();
  var valorDelInput = $(this).val();
  var ContainsSomething = valorDelInput.indexOf("@") && valorDelInput.indexOf('.com');
  if (ContainsSomething == -1) {
    nodo.addClass("border-danger");
    nodo.removeClass("border-success");
    var parentNode = nodo.parent();
    parentNode.append("<p>El texto ingresado no es un Email.</p>");
  } else {
    nodo.addClass("border-success");
    nodo.removeClass('border-danger');
    var parentNode = nodo.parent();
    parentNode.append("<p>El texto ingresado ahora es un mail! Segui asi</p>");
  }
  if (_event.type == 'blur') {
    nodo.on('input', validateEmptyMail);
  }

  addButton();
}

function addButton() {
 
  var button = $('#button');
  var nameContainsClass = firstnameinputnode.hasClass("border-success");
  var lastNameContainsClass = emailInputNode.hasClass("border-success");
  var dniContainsClass = textAreaInputNode.hasClass("border-success");
  if (nameContainsClass && lastNameContainsClass && dniContainsClass) {

    button.attr('disabled', false);



  }
}


function contactController() {
  var firstnameinputnode = $('#firstName');
  firstnameinputnode.one('blur', validateEmptyField);
  var firstnameinputnode = $('#firstName');
  firstnameinputnode.one('blur', validateEmptyField);
  var emailInputNode = $('#email');
  emailInputNode.one('blur', validateEmptyMail);
  var textAreaInputNode = $('#textarea');
  textAreaInputNode.one('blur', validateEmptyField);
  validateEmptyField(_event);
  validateEmptyMail(_event);

}


export default contactController

