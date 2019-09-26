$(document).ready(function () {
  console.log('Init App')
  // Espacio para escribir el código de nuestra aplicación
  //$('#button').on('click', handleButtonClick)
  //$(document).keydown(handleKeyDown)
  //$('ul').append('<li id="3">Item 3</li>')
  $(document).keydown(counter);
})

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






