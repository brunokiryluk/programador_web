import { setLocalList, getLocalList } from "./nicoLocalStorageFunctions";
export const CHARACTER_KEY = "characters"

function saveCharacter() {

    const charList = getLocalList(CHARACTER_KEY)
    console.log(charList);

    $('.btn').on('click', function () {

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



        // Literal, 2 lineas.
        charList.push(characterObj)
        setLocalList(CHARACTER_KEY, charList)

        // let charactersList
        // let listCharactersString = localStorage.getItem(CHARACTER_KEY);
        // if (listCharactersString) {
        //     charactersList = JSON.parse(listCharactersString);
        //     charactersList.push(characterObj)
        // }else{
        //     charactersList = [characterObj]
        // }

        // localStorage.setItem(CHARACTER_KEY,JSON.stringify(charactersList));   
    })
}



export default saveCharacter;