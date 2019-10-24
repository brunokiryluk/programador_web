import { CHARACTER_KEY } from "./localStorage";
function deleteCharacter (){
    $('.delete-button').on('click', function () {
        var id = $(this).attr("id");
        console.log(id);
        
        var getItem = localStorage.getItem(CHARACTER_KEY);
        var parseGetItem = JSON.parse(getItem);
        for (let index = 0; index < parseGetItem.length; index++) {
            const element = parseGetItem[index].position;
            console.log(element);
            
            if (id == element) {
               var spliceOfItem = parseGetItem.splice(index, 1);
               console.log(index);
               
               console.log(spliceOfItem);
               
                localStorage.setItem(CHARACTER_KEY, JSON.stringify(spliceOfItem) )
    
            }
        }
        
    
    }) 
    
}

export default deleteCharacter