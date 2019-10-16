

function getData(url, _showResult, _showError) {
  var request = $.ajax(url)
  request.done(function (data) {
    //debugger;
    _showResult(data)
  })
  request.fail(function (error) {
    _showError(error)
  })
}

function showResult(_peopleData) {
  //$('#verMas').on('click', verProxPagina)

  if (_peopleData.results) {
    var results = _peopleData.results;
    for (let index = 0; index < results.length; index++) {
      // console.log("El nombre es " + results[index].name + " y el peso es "+ results[index].height);
      var parentNode = $('#thead').parent();
      parentNode.append('<tr><th scope="col">#</th><th scope="col" >' + results[index].name + '/th><th scope="col" >' + results[index].gender + '</th><th scope="col" >' + results[index].height + '</th><th scope="col">' + results[index].mass + '</th><th scope="col">' + results[index].eye_color + '</th> <th scope="col"><button type="button" id= "guardar-button" class="btn btn-danger">Guardar</button></th></tr>')
    }
  }

  if (!_peopleData.next) {
    console.log('no hay next');
    
  }else{
    $('#verMas').click(function () {
      getData(_peopleData.next, showResult,showError)
    })
  }

  //if (_peopleData.next) {
    //getData(_peopleData.next, showResult, showError)
  //}
    //function verProxPagina(_peopleData) {
    //console.log(_peopleData.next);
    
  }
  


/*
if (_peopleData.next) {
  getData(_peopleData.next, showResult, showError)
}*/




/*$('#verMas').on('click', verMas);
  function verMas() {
    _peopleData.next

  }*/
//sajuanfacundo@gmail.com

function showError(_error) {
  console.log("El error es: " + _error);
}
getData("https://swapi.co/api/people/", showResult, showError);

function getPeople() {
  getData();


}

export default getPeople
