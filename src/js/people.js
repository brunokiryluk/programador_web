import localStorage from "./localStorage";
import translator from "./translator";

function getData(url, _showResult, _showError) {
  let request = $.ajax(url);
  request.done(function (data) {
    //debugger;
    _showResult(data);
  });
  request.fail(function (error) {
    _showError(error);
  });
}

function showResult(_peopleData) {
  //$('#verMas').on('click', verProxPagina)

  if (_peopleData.results) {
    let results = _peopleData.results;
    for (let index = 0; index < results.length; index++) {
      const element = results[index];
      console.log("este es mi objeto " + element.name);
      translator(element)
      let parentNode = $("#thead").parent();
      let characterPosition = results[index].url.slice(28, -1);
      parentNode.append(
        '<tr><td scope="col" id="'
        + characterPosition
        + '" class= "position">'
        + characterPosition +
        '</td><td scope="col" class="name" >' +
        element.name +
        '</td><td scope="col" class="gender" >' +
        element.gender +
        '</td><td scope="col" class="height" >' +
        element.height +
        '</td><td scope="col" class="mass">' +
        element.mass +
        '</td><td scope="col" class="eyeColor">' +
        element.eye_color +
        '</td><td scope="col" class="tdButton"><button type="button"  class="btn btn-danger">Guardar</button></td></tr>'
      );
    }

    
    localStorage();
  }

  if (!_peopleData.next) {
    console.log("no hay next");
  } else {
    $("#seeMore")
      .off()
      .click(function () {
        getData(_peopleData.next, showResult, showError);
      });
  }
}

//sajuanfacundo@gmail.com

function showError(_error) {
  console.log("El error es: " + _error);
}

function getPeople() {
  getData("https://swapi.co/api/people/", showResult, showError);
}

export default getPeople;
