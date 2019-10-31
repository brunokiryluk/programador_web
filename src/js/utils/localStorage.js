import { setLocalList, getLocalList } from "./CoderhouseLS";
export const CHARACTER_KEY = "characters"
import hideFunction from './hideFunction'


export default function localStorage() {

    let charList = getLocalList(CHARACTER_KEY)
    console.log(charList);

    $('.btn').off().on('click', function () {

        let characterEyeColor = $(this).parent().prev();
        let eyeColorText = characterEyeColor.text();

        let characterWeight = characterEyeColor.prev();
        let weightText = characterWeight.text();

        let characterHeight = characterWeight.prev();
        let heightText = characterHeight.text();

        let characterGenre = characterHeight.prev();
        let genreText = characterGenre.text();

        let characterName = characterGenre.prev();
        let nameText = characterName.text();

        let characterPosition = characterName.prev();
        let characterPositionText = characterPosition.text();


        let characterObj = {
            name: nameText,
            genre: genreText,
            height: heightText,
            weight: weightText,
            eyeColor: eyeColorText,
            position: characterPositionText
        }

        console.log(characterObj);
        charList.push(characterObj)
        setLocalList(CHARACTER_KEY, charList)
        hideFunction();
    })
}



