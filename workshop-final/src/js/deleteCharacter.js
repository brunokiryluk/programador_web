import { CHARACTER_KEY } from "./localStorage";
import { getLocalList, setLocalList } from "./nicoLocalStorageFunctions";


export default function deleteCharacter() {

    $('.delete-button').on('click', function () {
        let id = $(this).attr("id");
        console.log( id);
        
        let charactersList = getLocalList(CHARACTER_KEY)
   
        for (let index = 0; index < charactersList.length; index++) {
            const element = charactersList[index].position;

            if (id == element) {
                charactersList.splice(index, 1);
                console.log('eureka');
                setLocalList(CHARACTER_KEY, charactersList)
            }
        }
    })
}
