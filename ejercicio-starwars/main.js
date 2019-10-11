$(document).ready(function () {
  var btnNode = $('#delete');
  btnNode.on('click', deleteInputNode);
  function deleteInputNode(_event) {
    //var deleteNode = $(this);
    //var  style = $('#1');
    //  style.fadeout(2000);
    $('#tableBody').hide(3000, function () {
      $('tableBody').remove();
    });
  }
})
/*
var request = $.ajax({
    url: "https://swapi.co/api/people/-1/",
    method: "GET"
  })*/
/*
request.done(function( data ) {
  console.log( 'Respuesta: ',data )
});
 
request.fail(function( error ) {
  console.log( 'Error: ' , error )
})
El promise es el objeto que devuelve el metodo ajax. Este objeto tiene como funciones "done", y "fail".
*/

//-----------------------------

function getData(url, _showResult, _showError) {
  var request = $.ajax(url)
  request.done(function (data) {
    _showResult(data)
  })
  request.fail(function (error) {
    _showError(error)
  })
}


function showResult(_peopleData) {
  //preguntar si _data existe, si es diferente de null.
  //Como results es  un array, tengo que recorrer para mostrar
  //preguntar si "next" tiene algo
  //contiene la url que tenemos que llamar
  //ShowResult no hace la llamada a ajax, sino que get Data
  //debo llamar a get data desde esta funcion 
  if (_peopleData.results) {
    var results = _peopleData.results;
    for (let index = 0; index < results.length; index++) {
     // console.log("El nombre es " + results[index].name + " y el peso es "+ results[index].height);
     $('#thead').append('')
}
  }
  
  if (_peopleData.next) {
    getData(_peopleData.next, showResult, showError)
  }
  

}

function showError(_error) {
  console.log("El error es: " + _error);


}



getData("https://swapi.co/api/people/", showResult, showError);


/**
 * $(document).ready(function () {
    var btnNode = $('#delete');
    btnNode.on('click', deleteInputNode);
    function deleteInputNode(_event) {
        $(this).parent().parent().hide(3000, function(){
            $(this).remove(); solucion profe
        });
        //var  style = $('#1');
      //  style.fadeout(2000);
        $('#tableBody').hide(3000,function () {
            $('tableBody').remove();
        });
    }
})
 */