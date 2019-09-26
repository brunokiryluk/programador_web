/*function sayHello() {
    console.log('holi');

}


function sayMyName(yourName) {
    console.log('Tu nombre es ' + yourName)
  }
  
  var myName = 'Mónica'
  
  sayMyName(myName) // Muestra en consola el string 'Tu nombre es Mónica'
  
  sayMyName('Heisenberg') // Muestra en consola el string 'Tu nombre es Heisenberg'
  
  sayMyName(2);

/*
function sum(value1, value2) {
    var sum = value1+value2
    return sum;
};

var result = sum(5+4); */


//var examResults = [7, 5, 6, 4, 3, 2, 8];

/*
function miPromedio(miArr) {
    var count = 0;
    console.log('ENTRO EN LA FUNCO');
    for (var i = 0; i < miArr.length; i++) {
        console.log('ENTRO EN LA 2');
        count = count + miArr[i];
    }
    var promedio = count / miArr.length;
    return promedio;
};
miPromedio(examResults);
*/

/*

function miPromedio(miArr){
    var count = 0;
    for(var i = 0 ; i < miArr.length; i ++);
}
||||||||||||||||||||||||||||
*/


/*
var studentsList = [
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956
    },
    {
        firstName: 'Pablo',
        lastName: 'Picapiedras',
        dni: 45678983
    }
];


function students(name, miarray) {
    for (let index = 0; index < miarray.length; index++) {
        if (name == miarray[index].firstName || name == miarray[index].lastName) {
            return index;

        }



    }
    return -1;
}


var alumno = prompt('ingrese alumno');
if (alumno) {
    var posicionAlumno = students(alumno, studentsList);
    var alumnoEncontrado = posicionAlumno != -1;
    if (alumnoEncontrado) {
        alert('se encontro el alumno en la posicion'+ posicionAlumno);
    }else{
        alert('no se encontro el alumno especificado');
    }
}
students('Pablo', studentsList);
console.log(students('Pablo', studentsList));

*/


/*Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido,
si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario -1.
 La función solo encuentra coincidencias exactas, por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente.
-UN OBJETO ANONIMO NO TIENE DEFINICION, ES DECIR QUE NO TIENE UNA FUNCION CONSTRUCTORA
-CUANDO CREO UN OBJETO CREO UNA REFERENCIA EN MEMORIA


*/






/*

function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = ``;
    for (var i in objeto) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objeto.hasOwnProperty(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
      }
    }
    return resultado;
  }
  console.log(mostrarPropiedades(studentsList, 'Juan'));

  */

//CLASE CINCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 5
/*
var obj1= {
    title:'shrek',
    director: 'Andrew Adamson',
    year: 2001
  
}

var obj2={
  title:'shrek',
  director: 'Andrew Adamson',
  year: 2001
}
*/
/*
function User (name) {
   this.age = 45
 
   this.showInfo= function() {
     console.log('Hola mi nombre es ', name, ' y mi edad es ', this.age)
   }
 
    this.addYear= function() {
     this.age = this.age + 1
   }
 
    // Esta función no cambia la propiedad publica age, porque se llama al crear el objeto.
 }
 
 var user = new User('Mónica') // Muestra en consola 'Hola mi nombre es  Mónica y mi edad es undefined',
 // porque showInfo se ejecuta dentro de la función constructora al momento de generar el objeto.
 
 console.log(user.age) // Muestra en consola el number 45
 
 user.addYear();
 user.showInfo(); // Muestra el error user.addYear is not a function y rompe el código


 -----------------------------------------------------------EJEMPLO OBJETOS PELICULA------------------------------------------- 
 function Movie(_title, _director, _year){
   var _id = Math.Random();
   var _modified = false;
​
   this.title = _title;
   this.director = _director;
​
   this.getYear = function() {
       return _year;
   }
​
   this.getIdtYear = function() {
       return _id;
   }
​
   this.setYear = function(newYear) {
       _year = newYear;
       _modified = true;
   }
}
 */
/*
var cars = [
   {
     model:'Suran',
     brand: 'volkswagen',
     year: 2015
   },
   {
     model:`Audi TT`,
     brand:'Audi',
     year: 2017
   },
   {
     model:`Gran turismo`,
     brand:'Maserati',
     year: 2018
   }
 ]


function Car(_model,_brand,_year) {
    var _id = Math.random();
    var _modified = false;

    this.model = _model;
    this.brand = _brand;
    this.year = _year;

    this.getCarName = function () {
         return 'El modelo del auto es '+ this.model + ' su marca es '+ this.brand+ ' y su año es '+ this.year;         
    }
}
/*
car1 = new Car ('Suran', 'Volkswagen', 2015);
car2 = new Car ('Audi TT', 'Audi', 2017);
car3 = new Car ('Gran turismo', 'Maserati', 2018);
*/
/*
 var myCars = [];
 for (let index = 0; index < cars.length; index++) {
     var car = cars[index];
     var myCar = new Car(car.model, car.brand, car.year);
     myCars.push(myCar);
 }
 myCars[0].getCarName();
  const miauto = new Car('Volvo', 'Hola', 445);
  
*/
//-------------------------------------------------------------------CLASE JUEVES 29/08/2019-------------------------------------------------
/* La función deberá recibir como parámetro un indice y como segundo parámetro un Array y
 devolver una copia del mismo pero 
con el elemento que esta en el indice eliminado.*/


/*
var numbers = [1, 2, 3, 4, 5];
function borrar (indice, miArray) {
    if (Array.isArray(miArray)) {
        return numbers.splice(indice, 1);

    }
   


    TODO 
    

}*/
/*
--------------------------parte de desafio------- //// (agregar UpperCase)
*/
//*DESAFIO  6 PARA ENTREGAR
function includesText(string1,string2) {
    if(typeOf (string1 == 'string' && typeOf (string2 == 'string'))){
        var firstWord = string1.toUpperCase()
        var secondWord = string2.toUpperCase()
        var indexOfSecond = secondWord.indexOf(firstWord);
        
        if (indexOfSecond  >= 0) {
            return true;
        }
        
            return false;
    }
    
    } 
    

/*   Crear una función que reciba como parámetros
 dos string y devuelva true en caso de encontrar una coincidencia 
parcial y false en caso contrario, la función no tiene que distinguir mayúsculas de
 minúsculas. El primer parámetro pasado a la función es el que se va a tratar de encontrarse 
 dentro del segundo, si alguno de los parámetros no es un string también deberá devolver false.
*/



/*------------------------------------------------------------------------------------------------------------
 Crear una función que permita crear un objeto Student mediante el constructor new,
 el objeto deberá tener las siguientes propiedades:
Publicas:
firstName
lastName
dni
email
Privadas:
id generada automáticamente al crear el objeto.
El objeto deberá tener las siguientes métodos:
Públicos:
getId deberá devolver el id del objeto
getFullName deberá devolver un String con el nombre completo del objeto, salvando los casos donde el firstName 
olastName sea undefined.
Crear tres alumnos usando los datos de prueba y probar sus métodos.
*/



/*
var students = [
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987,
        email: 'juan@gmail.com'
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989,
        email: 'ana@gmail.com'
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956,
        email: 'pedro@gmail.com'
    }
]
function Student(_firstName, _lastName, _dni, _email) {
    var _id = Math.random();
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.dni = _dni;
    this.email = _email;

    this.getId = function () {
        console.log('El id de este objeto es ' + _id);
    }
    this.getFullName = function(){
        'El nombre completo del alumno es '+ this.firstName+' '+ this._lastName;

    }
}
*/