/*function showMessage(){
    console.log('El usuario hizo click')
  }
  function showBlurMessage(){
    console.log('El usuario perdió el foco')
  }
  */
// var button = document.getElementById('button')

//button.onclick = showMessage
/*
function showMessage(){
  console.log('El usuario hizo click')
}
/ button.onmouseover = showMessageOver

function showMessageOver(){
  console.log('El usuario paso el mouse sobre el botón')
}
var button = document.getElementById('button')



function showMessage(event){
  var inputNode =  event.target;
  console.log(event);
  console.log('El usuario hizo click en el elmento con id ' + inputNode.id);
};


var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(event){
    console.log(event);
  console.log('El usuario perdió focoOOOOO')
}

*/
/*
--------------------------------------------------------------------------------------------------------------
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}
 function miValidacion(event) {
   if (button.onblur) {
     
  }
}
----------------------------------------------------------------------------------------------------------
*/
var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}



function createStudentNode(_student) {
  //creamos los nodos
  var liNode = document.createElement('li');
  var h1Node = document.createElement('h1');
  var h3Node = document.createElement('h3');
  var pNode = document.createElement('p');
  //agregamos la clase
  liNode.classList.add('list-group-item');

  h1Node.innerHTML = _student.firstName;
  h3Node.innerHTML = _student.dni;
  pNode.innerHTML = _student.email;
  liNode.appendChild(h1Node);
  liNode.appendChild(h3Node);
  liNode.appendChild(pNode);

  return liNode;

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