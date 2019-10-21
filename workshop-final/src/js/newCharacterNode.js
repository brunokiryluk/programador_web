import { CHARACTER_KEY } from "./localStorage";

function newCharacterNode() {
    console.log(CHARACTER_KEY);

    var getItem = localStorage.getItem(CHARACTER_KEY);
    if (getItem) {
        var parseGetItem = JSON.parse(getItem)
        for (let index = 0; index < parseGetItem.length; index++) {
            const characterList = parseGetItem[index];
            console.log(characterList.name);
            var characterPosition = [index];

            var parentNode = $('#thead').parent();

            parentNode.append('<tr><td scope="col" class= "position">' +
                characterPosition//characterList.position
                + '</td><td scope="col" class = "name" >'
                + characterList.name +
                '</td><td scope="col" class = "gender" >'
                + characterList.genre
                + '</td><td scope="col" class = "height" >'
                + characterList.height
                + '</td><td scope="col" class = "mass">'
                + characterList.weight
                + '</td><td scope="col" class = "eyeColor">'
                + characterList.eyeColor
                + '</td> <td scope="col" class = "tdButton"><button type="button"  class="btn btn-danger">Eliminar</button></td></tr>');


        }
    }




}
export default newCharacterNode;