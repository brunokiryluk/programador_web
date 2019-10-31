import { CHARACTER_KEY } from "./localStorage";
import { getLocalList, setLocalList } from "./nicoLocalStorageFunctions";
import hideFunction from "./hideFunction";


export default function deleteCharacter() {

    $('.delete-button').on('click', function () {
        let id = $(this).attr("id");
        console.log(id);

        let charactersList = getLocalList(CHARACTER_KEY)

        for (let index = 0; index < charactersList.length; index++) {
            const element = charactersList[index].position;
            console.log(element);
            

            if (id == element) {
                charactersList.splice(index, 1);
                console.log('eureka');
                setLocalList(CHARACTER_KEY, charactersList)
            }
        }
        let tr = $(this).parent().parent()
        hideFunction(tr);
    })
}
