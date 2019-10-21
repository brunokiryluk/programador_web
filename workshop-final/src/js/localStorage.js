//import newCharacterNode from "./newCharacterNode";
export const CHARACTER_KEY = "characters" 

 


function saveCharacter() {
    $('.btn').on('click', function () {
        
       // console.log(btn);
        let characterEyeColor = $(this).parent().prev();
        let eyeColorText = characterEyeColor.text();

        console.log(characterEyeColor);
        let characterWeight= characterEyeColor.prev();
        let weightText = characterWeight.text();
       // console.log(characterWeight.text());
        let characterHeight = characterWeight.prev();
        let heightText = characterHeight.text();
       // console.log(characterHeight.text());
        let characterGenre = characterHeight.prev();
        let genreText = characterGenre.text();
       // console.log(characterGenre.text());
        let characterName = characterGenre.prev();
        let nameText = characterName.text();
        let characterPosition = characterName.prev();
        let characterPositionText = characterPosition.text();
        
        //console.log(characterName.text());

        var characterObj = {
            name : nameText , 
            genre : genreText ,
            height : heightText ,
            weight : weightText ,
            eyeColor : eyeColorText,
            position : characterPositionText

        }

        var charactersList;
        var listCharactersString = localStorage.getItem(CHARACTER_KEY);
        if (listCharactersString) {
            charactersList = JSON.parse(listCharactersString);
            charactersList.push(characterObj)
        }else{
            charactersList = [characterObj]
        }
        
        localStorage.setItem(CHARACTER_KEY,JSON.stringify(charactersList));
        //newCharacterNode(characterObj);
       

    })
}



export default saveCharacter;