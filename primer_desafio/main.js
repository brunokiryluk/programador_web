const STUDENT_KEY = 'student';
var campoNombre = document.getElementById("nombre");
campoNombre.onblur = validarNombre;

function validarNombre(_event) {
    nameInput = _event.target;
    inputValue = nameInput.value;


    if (typeof inputValue === "string" && isNaN(inputValue) && inputValue !== "") {
        //si es string, NO es un numero, y NO esta vacio, agrego y saco clases
        nameInput.classList.add("border-success");
        nameInput.classList.remove("border-danger");

    } else {
        nameInput.classList.add("border-danger");
        nameInput.classList.remove("border-success");
    }
    addButton();
}


var campoApellido = document.getElementById("apellido");
campoApellido.onblur = validarNombre;
// var btnAgregarAlumno = document.getElementById("myButton");
// onblur = validarCampos;



var campoDocumento = document.getElementById("documento");
campoDocumento.onblur = validarDocumento;
function validarDocumento(_event) {
    docInput = _event.target;
    inputValue = docInput.value;
    inputValueParse = parseInt(inputValue);
    if (isNaN(inputValue)) { //&& inputValueParse <= 0)// {
        //si el valor NO es un numero y es menor a 0 deshabilito el boton de agregar alumno
        docInput.classList.remove("border-success");
        docInput.classList.add("border-danger");

    } else {
        docInput.classList.add("border-success");
        docInput.classList.remove("border-danger");
    }
    addButton();
}

function addButton() {
    //funcion para habilitar o deshabilitar el boton. Esta funcion tiene que estar al final de cada input(nombre, apellido, y documento)
    var nameContainsClass = campoNombre.classList.contains("border-success");
    var lastNameContainsClass = campoApellido.classList.contains("border-success");
    var dniContainsClass = campoDocumento.classList.contains("border-success");
    var botonAgregarAlumno = document.getElementById('myButton')
    if (nameContainsClass && lastNameContainsClass && dniContainsClass) {
        botonAgregarAlumno.disabled = false;
        //si esos nodos contienen las clases que especifique, se tiene que deshabilitar el boton agregar alumno
        //fijarse realmente cual es el id del boton
    }
}

     var botonAgregarAlumno = document.getElementById('myButton');
     botonAgregarAlumno.onclick = addStudentToLocalStorage;



function addStudentToLocalStorage() {
    var studentListString = localStorage.getItem(STUDENT_KEY);
    inputNombre = document.getElementById('nombre');
    inputApellido = document.getElementById('apellido');
    inputDni = document.getElementById('documento');
    var alumno =
    {
        firstName: campoNombre.value,
        lastName: campoApellido.value,
        dni: campoDocumento.value

    }
    var studentList;

    if (studentListString) {
        studentList = JSON.parse(studentListString);
        studentList.push(alumno);
    } else {
        studentList = [alumno];
    }
    localStorage.setItem(STUDENT_KEY, JSON.stringify(studentList));
    newStudentNode(alumno);

    
}

function newStudentNode(_student) {
    var newStudentField = document.getElementById('campoNuevoEstudiante');
    var nameStudentNode = document.createElement('p');
    var lastNameNode = document.createElement('p')
    var dniNode = document.createElement('p');
    nameStudentNode.innerHTML = _student.firstName;
    lastNameNode.innerHTML = _student.lastName;
    dniNode.innerHTML = _student.dni;
    newStudentField.appendChild(nameStudentNode);
    newStudentField.appendChild(lastNameNode);
    newStudentField.appendChild(dniNode);
}


var deleteButton = document.getElementById('delete-button');
deleteButton.onclick=deleteStudent;
function deleteStudent() {
    var inputDniToDelete = document.getElementById('input-dni-to-delete');
    var valueToDelete = inputDniToDelete.value;
    var studentPosition = findStudentByDni(valueToDelete);
    if (studentPosition) {
        //si encontre el estudiante, elimino el elemento en dicha posicion
        var studentListString = localStorage.getItem(STUDENT_KEY);
        var studentList = JSON.parse(studentListString);
        studentList.splilce(studentPosition.position, 1);
        localStorage.setItem(STUDENT_KEY, JSON.stringify(studentListString));
        location.reload();
    }
}

function findStudentByDni(_dni) {
    var studentListString = localStorage.getItem(STUDENT_KEY);
    if (studentListString != null) {
        var studentList = JSON.parse(studentListString);
        for (var index = 0; index < studentList.length; index++) {
            if(_dni= studentList[index].dni){
                return{
                    alumno: studentList[index],
                    position: index
                };
            }
            
        }
    }
    //Si la lista no existe, o no encontre una coincidencia devuelvo null
    return null;
}
/*
window.onload = function () {
    var studentListString = localStorage.getItem(STUDENT_KEY);
    var studentList = JSON.parse(studentListString);
    for (let index = 0; index < studentList.length; index++) {
        var alumno = studentList[index];

        newStudentNode(alumno);
    }
}
*/
































