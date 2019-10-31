import { CHARACTER_KEY } from "../utils/localStorage";
import deleteCharacter from "../utils/deleteCharacter";
import { getLocalList } from "../utils/CoderhouseLS";

export default function localStorageController() {
    console.log(CHARACTER_KEY);

    let characterList = getLocalList('characters')

    if (characterList) {
        for (let index = 1; index < characterList.length; index++) {
            const characterItem = characterList[index];
            console.log([index]);


            let parentNode = $('#thead').parent();

            parentNode.append('<tr><td scope="col" class="position">' +
                [index]
                + '</td><td scope="col" class="name">'
                + characterItem.name
                + '</td><td scope="col" class="gender">'
                + characterItem.genre
                + '</td><td scope="col" class="height">'
                + characterItem.height
                + '</td><td scope="col" class="mass">'
                + characterItem.weight
                + '</td><td scope="col" class="eyeColor">'
                + characterItem.eyeColor
                + '</td><td scope="col" class="tdButton"><button type="button" id="' + characterItem.position + '" class="btn btn-danger delete-button">Eliminar</button></td></tr>');
        }
        deleteCharacter();
    }
}