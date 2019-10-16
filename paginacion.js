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
if (_peopleData.results) {
    var results = _peopleData.results;
    for (let index = 0; index < results.length; index++) {
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


function showError(_error) {
  console.log("El error es: " + _error);
}
getData("https://swapi.co/api/people/", showResult, showError);

function getPeople() {
  getData();


}

export default getPeople
