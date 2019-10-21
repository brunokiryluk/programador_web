import saveCharacter from "./localStorage";




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
      var parentNode = $('#thead').parent();
      var characterPosition = results[index].url.slice(28, -1);
      parentNode.append('<tr><td scope="col" id= "'+characterPosition+'" class= "position">' +
        characterPosition + '</td><td scope="col" class = "name" >'
        + results[index].name +
        '/td><td scope="col" class = "gender" >'
        + results[index].gender
        + '</td><td scope="col" class = "height" >'
        + results[index].height
        + '</td><td scope="col" class = "mass">'
        + results[index].mass
        + '</td><td scope="col" class = "eyeColor">'
        + results[index].eye_color
        + '</td> <td scope="col" class = "tdButton"><button type="button"  class="btn btn-danger">Guardar</button></td></tr>');
    }
  }

  if (!_peopleData.next) {
    console.log('no hay next');

  } else {
    $('#seeMore').off().click(function () {
      getData(_peopleData.next, showResult, showError)
    })
  }
  saveCharacter();
}

//if (_peopleData.next) {
//getData(_peopleData.next, showResult, showError)
//}
//function verProxPagina(_peopleData) {
//console.log(_peopleData.next);




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


function getPeople() {
  getData("https://swapi.co/api/people/", showResult, showError);




}

export default getPeople

