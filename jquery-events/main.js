$(document).ready(function () {
    console.log('Init App')
    // Espacio para escribir el código de nuestra aplicación
    $('#button').on('click', handleButtonClick)
    $(document).keydown(handleKeyDown)
    $('ul').append('<li id="3">Item 3</li>')
    
  })
function handleButtonClick() {
    console.log('hola');
}


function handleKeyDown(event){
  if(event.which === 32){
    console.log('Se presionó la barra espaciadora')
  }

}







