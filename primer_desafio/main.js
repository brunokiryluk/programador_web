var campoNombre = document.getElementById("nombre");
var campoApellido = document.getElementById("apellido");
// var btnAgregarAlumno = document.getElementById("myButton");
campoNombre.onblur = validarNombre;
campoApellido.onblur = validarNombre;
// onblur = validarCampos;
function validateAddButton() {
//    inputfirstname.classList.contains("border-success")
}
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



}
var campoDocumento = document.getElementById("documento");
campoDocumento.onblur = valiaroDocumento;
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

}






//document.getElementById(myButton).disabled = true;
