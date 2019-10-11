

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
       var parentNode = $('#thead').parent();
       parentNode.append('<tr><th scope="col">#</th><th scope="col">'+ results[index].name+'/th><th scope="col">Género</th><th scope="col">Altura</th><th scope="col">Peso</th><th scope="col">Color de ojos</th> <th scope="col">Guardar</th></tr>')
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

  function getPeople() {
    getData();
    

}

export default getPeople
