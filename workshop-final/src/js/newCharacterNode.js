import { CHARACTER_KEY } from "./localStorage";
import deleteCharacter from "./deleteCharacter";
import { getLocalList } from "./nicoLocalStorageFunctions";

export default function newCharacterNode() {
    console.log(CHARACTER_KEY);


    let navidad = getLocalList('characters')
    console.log(navidad, 'lala');


    if (navidad) {
        for (let index = 0; index < navidad.length; index++) {
            const characterItem = navidad[index];

            let parentNode = $('#thead').parent();

            parentNode.append('<tr><td scope="col" class="position">' +
                characterItem.position
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