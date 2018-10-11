// functions types:
// var myFunction = function(){}
// function myFunction(){}
// function myFunction(){}()
// function(){}

//0. Prototype = Herencia.
//1. Objetos
     var person = {
         name: "Luisa",
         lastName: "Vaca",
         gender: "Female"
     }
//1.1 Cómo añadir propiedades nuevas a un objeto 
     person.myNewPropierty = "new propierty";
//2. Funciones constructoras
     function Person (name, lastName, gender){
         this.name = name;
         this.lastName = lastName;
         this.gender = gender;
     }
//3. Cómo ejecutar esta función?
     person("Luisa", "Vaca", "F"); //undefined
//3.1 Operador new: le dirá al motor de javascript que la funcion se ejecutará de manera constructora
     var person = new Person("luisa", "Vaca", "Female")
    // {
    //     name: "Luisa",
    //     lastName: "Vaca",
    //     gender: "Female"
    // }
//4. Metodos
     Person.prototype.introduce = function(){
         conosle.log(`Hi my name is ${this.name} ${this.lastName}`);
     }
//4.1 cómo ejecutar los metodos ? 
     person.introduce()
     // Hi my name is Luisa Vaca
//5 Heredando en un nuevo nivel! Y si las personas tuvieran profesiones?
     function Developer(name, lastName, gender, yearsOfExperience){
        Person.call(this, name, lastName, gender);
        this.yearsOfExperience = yearsOfExperience;
     }
//5.1 Qué pasa si lo ejecutamos con el operador New
//5.2 Qué pasa si quiero que Person se presente ?
//5.3 Heredemos metodos!
     Developer.prototype = Object.create(Person.prototype);
//5.4 Ahora podemos acceder a los metodos de Persona

//               |))    |))
// .             |  )) /   ))
// \\   ^ ^      |    /      ))
//  \\(((  )))   |   /        ))
//   / G    )))  |  /        ))
//  |o  _)   ))) | /       )))
//   --' |     ))`/      )))
//    ___|              )))
//   / __\             ))))`()))
//  /\@   /             `(())))
//  \/   /  /`_______/\   \  ))))
//       | |          \ \  |  )))
//       | |           | | |   )))
//       |_@           |_|_@    ))
//      /_/           /_/_/

//6. Herencia encadenada o Delegación
//6.1 Qué hizo Javascript para heredar?
     //Bombero está construido a partir de un prototipo? // Si
     //Cual prototipo? // Person
     //Person tiene el metodo presentarse ? Sí
//7 Tambien podemos crearle un Metodo a developer de la misma manera que Person
    Developer.prototype.profesionalIntroduce = function(){
        console.log(`Hi my name is ${this.name} ${this.lastName} and I'm a web developer with ${this.yearsOfExperience} of experience`)
    }
//8 Qué son clases ?
//8.1 Sugar sintax
//9.Escribamos lo anterior en una clase  
class Person{
    constructor(name, lastName, gender){
      this.name = name;
      this.lastName = lastName;
      this.gender = gender;
    }
    introduce(){
     console.log(`Hi my name is ${this.name} ${this.lastName}`);
    }
}

var person = new Person("Luisa", "Vaca", "Female");
 
class Developer extends Person{
    constructor(name, lastName, gender, yearsOfExperience){
      super(name, lastName, gender);
      this.yearsOfExperience = yearsOfExperience;
    }

    profesionalIntroduce(){
    console.log(`Hi my name is ${this.name} ${this.lastName} and I'm a web developer with ${this.yearsOfExperience} of experience`);
  }
}

var person = new Developer("Luisa", "Vaca", "Female", 2.5);

// .     .       .  .   . .   .   . .    +  .
//   .     .  :     .    .. :. .___---------___.
//        .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .
//     .  :       .  .  .:../:            . .^  :.:\.
//         .   . :: +. :.:/: .   .    .        . . .:\
//  .  :    .     . _ :::/:               .  ^ .  . .:\
//   .. . .   . - : :.:./.                        .  .:\
//   .      .     . :..|:                    .  .  ^. .:|
//     .       . : : ..||        .                . . !:|
//   .     . . . ::. ::\(                           . :)/
//  .   .     : . : .:.|. ######              .#######::|
//   :.. .  :-  : .:  ::|.#######           ..########:|
//  .  .  .  ..  .  .. :\ ########          :######## :/
//   .        .+ :: : -.:\ ########       . ########.:/
//     .  .+   . . . . :.:\. #######       #######..:/
//       :: . . . . ::.:..:.\           .   .   ..:/
//    .   .   .  .. :  -::::.\.       | |     . .:/
//       .  :  .  .  .-:.":.::.\             ..:/
//  .      -.   . . . .: .:::.:.\.           .:/
// .   .   .  :      : ....::_:..:\   ___.  :/
//    .   .  .   .:. .. .  .: :.:.:\       :/
//      +   .   .   : . ::. :.:. .:.|\  .:/|
//      .         +   .  .  ...:: ..|  --.:|
// .      . . .   .  .  . ... :..:.."(  ..)"
//  .   .       .      :  .   .: ::/  .  .:
