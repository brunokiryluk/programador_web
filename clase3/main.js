/*for(var i ; i<10 ; i++){
    console.log(i);
}

var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i];
  console.log(day);
}
*/

/*var value;

do{
  value = prompt('Ingrese un valor mayor a 5')

}while(value <= 5);

console.log(value); */

/*
for(var i = 1 ; i < 10 ; i++){
console.log(i);

if(i === 5){
break
}
}*/
/*
for(var i = 1 ; i < 5 ; i++){
if(i === 3){
continue
}
console.log(i)
}*/


/*

var pokemons = [
  { 
    name: 'Pikachu' 
  },
  { 
    name: 'Charmander'
  },
  { 
    name: 'Psyduck'
  },
  { 
    name:  'Mew'
  }, 
  { 
    name: 'MewTwo'
  }
]
​
var pokemon
​
for (var i = 0; i< pokemons.length; i++) {
  pokemon = pokemons[i];
  console.log('El nombre del elemento en la posicion ' + i + ' es ' + pokemon.name);
};

*/


/*
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato',
];
var mensaje;
for (var i = 0; i< daysOfTheWeek.length; i++) {
  switch (daysOfTheWeek[i]) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      mensaje = ' es un día de la semana';
      break;
    default:
      if (daysOfTheWeek[i] == 'Sábado' || daysOfTheWeek[i] == 'Domingo'){
        mensaje = ' es fin de semana';
      } else {
        mensaje =' no es un día';
      }
  }
  console.log(daysOfTheWeek[i] + mensaje)
}parseInt(
*/

/*
var num = parseInt(prompt('ingrese un valor numerico'));
var num2 = parseInt(prompt('ingrese un segundo valor numerico'));
var operation = parseInt(prompt('que operacion desea realizar? sum, rest, div, o mult'));

if (operation = 'sum') {
  console.log(num + num2);
}
else if (operation = 'mult') {
  console.log(num * num2);
}
else if (operation = 'rest') {
  console.log(num - num2);
}
else {
  console.log('numero erroneo');
}
if (operation == 'div') {
  while (num2 == 0) {

    num2 = parseInt(prompt('ingrese segundo numero otra vez'));

  }
};


else {
  console.log(num / num2);
} 
*/




const MENSAJE_OPERACION = 'Ingresar operacion [sum, div, mul o res]';
  const MENSAJE_OPERACION_INVALIDA = 'La operacion ingresada no es valida';
  const MENSAJE_RESULTADO = 'El resultado es: ';
  const MENSAJE_PRIMER_NUMERO = 'Ingrese el primer numero';
  const MENSAJE_SEGUNDO_NUMERO = 'Ingrese el segundo numero';

  var operation = prompt(MENSAJE_OPERACION);
  var numberOne = parseInt(prompt(MENSAJE_PRIMER_NUMERO));
  var numberTwo = parseInt(prompt(MENSAJE_SEGUNDO_NUMERO));
  var result = 0;

  switch (operation) {
      case 'sum':
        result = numberOne + numberTwo;
        break;
      case 'mul':
        result = numberOne * numberTwo;
        break;
      case 'res':
        result = numberOne - numberTwo;
        break;
      case 'div':
        while(numberTwo == 0){
          numberTwo = parseInt(prompt(MENSAJE_SEGUNDO_NUMERO));
        }
        result = numberOne / numberTwo;
        break;
      default:
        alert(MENSAJE_OPERACION_INVALIDA);
        break;
  };

  console.log("El resultado es: " + result);




















