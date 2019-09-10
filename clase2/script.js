
/*var condicion =1>2;
var condicion2= 5<3;
var condicion3= 'ana'>'alan';
var condicion4= '5'<=5;

UN STRING VACIO SE EVALUA COMO FALSE
*/

/*
var condicion = !("hola"==="hola");
 var condicion2= !false;
 var condicion3= !null;
 var condicion4= !!'';

 |||||||||||||||||||||||||||||||||||||||||
 */

/*

 var condicion = (5>3)&& (6<4);
 var condicion2= 'juan'&& 0;
 var condicion3= ''&& true;
 var condicion4= 7>9 && false && 4<5 && 6>2;
 */

 var answer= prompt("ingrese sexo");
 var edad= prompt("Ingrese edad");
 var sra= 'Sra ';
 var sr= 'Sr ';
 var mensajeMayor= 'usted es mayor de edad y puede ingresar al sitio';
 var mensajeMenor='usted es menor de edad y no puede ingresar al sitio';



if (answer=='femenino' && edad >=18){
console.log(sra+ mensajeMayor);
}
else if (answer== 'masculino' && edad >=18){
console.log(sr+mensajeMayor);
}

else if (answer=='masculino' && edad<18){
    console.log(sr+mensajeMenor);
}
else if (answer=='femenino' && edad<18){
console.log(sra+mensajeMenor);
}
else if(answer=='femenino' || 'masculino' && edad<0){
console.log("Error al ingresar edad");
    
}

// 





/*

var resultado= prompt("cual fue el resultado?");



switch (resultado) {
    case 'Gano':
      console.log('Se le suman 3 puntos')
      break
    case 'Perdio':
      console.log('Se le suma 1 punto')
      break
    case 'Empato':
      console.log('No se le suma ningún punto')
       break
    default:
      console.log('El resultado no es correcto')
      break
  }

  */

/*
var answer= prompt("ingrese sexo");
switch (answer) {
        case 'masculino':
            console.log("sr")
            break;
        case 'femenino':
            console.log("sra ");
            break;   
            
}

            
var answer2= prompt("ingrese edad"); 
switch(answer2){            
        case (answer2>=18):
            console.log(answer+ "usted es mayor de edad")
             break;
        case (answer2<18):
            console.log (answer+ "usted es menor de edad")    
            break;
}

*/

            /*
        case 'miercoles':
                 
        case 'jueves':
                     
        case 'viernes':
            console.log('elejiste dia de semana')
             break;
case 'sabado':
case 'domingo':
    console.log("elejiste finde")
        break;
 
     default:
         break;
 }*/