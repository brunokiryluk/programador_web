import localStorage from "../utils/localStorage";
import translator from "../utils/translator";

export function getData(url, _showResult, _showError) {
  let request = $.ajax(url);
  request.done(function (data) {
    
    _showResult(data);
  });
  request.fail(function (error) {
    _showError(error);
  });
}

export function showResult(_peopleData) {
  
  if (_peopleData.results) {
    let results = _peopleData.results;
    for (let index = 0; index < results.length; index++) {
      const element = results[index];
      console.log("este es mi objeto " + element.name);
      let id = parseInt(element.url.slice(28, -1))
      translator(element, id)
      
      let parentNode = $("#thead").parent();
         
      parentNode.append(
        '<tr><td scope="col" id="'
        + id
        + '" class= "position">'
        + id +
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

export function showError(_error) {
  console.log("El error es: " + _error);
}

export default function peopleController() {
  getData("https://swapi.co/api/people/", showResult, showError);
}


