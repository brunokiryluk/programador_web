
export default function translator(_object) {
    switch (_object.gender) {
        case "male":
            _object.gender = "Hombre";

            break;

        case "female":
            _object.gender = "Mujer";

            break;
        case "n/a":
            _object.gender = "Hermafrodita";


        default:
            break;
    }
    switch (_object.eye_color) {
        case "blue":
            _object.eye_color = "Azul";
            break;

        case "yellow":
            _object.eye_color = "Amarillo";
            break;

        case "red":
            _object.eye_color = "Rojo";
            break;

        case "brown":
            _object.eye_color = "Marron";
            break;

        case "blue-gray":
            _object.eye_color = "Azul-Gris";
            break;


        case "orange":
            _object.eye_color = "Naranja";
            break;


        case "hazel":
            _object.eye_color = "Color Avellana";
            break;

        case "pink":
            _object.eye_color = "Rosa";
            break;
        case "red, blue":
            _object.eye_color = "Rojo, Azul";
            break;
        case "unknown":
            _object.eye_color = "Desconocido";
            break;
        case "gold":
            _object.eye_color = "Dorado";
            break;
        case "green, yellow":
            _object.eye_color = "Verde, Amarillo";
            break;
        case "white":
            _object.eye_color = "Blanco";
            break;
        default:
            break;
    }
    switch (_object.url) {
        case (_object.url >= 18):
           _object.url -=  1;
            

        return _object.url
    }




}


