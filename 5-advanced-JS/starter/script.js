// //Inheritance in practice

// class Person{

//     name;
//     age;
//     profession;
//     calculateRetirement = () =>{
//         console.log(2020 - this.age);
//     }

// }

// var persona1 = new Person();

// persona1.name = "John"
// persona1.age = 55
// persona1.profession = "Architect"
// persona1.calculateRetirement()

// console.log(persona1)



// var john = {
//     name: 'John',
//     age: 55,
//     job: 'teacher'
// }

// //Function constructor


// var Persona = function(name, age, job) {

//     this.name = name;
//     this.age = age;
//     this.job = job;

// }

// Persona.prototype.yearOfBirth = function(){
//     console.log(2020 - this.age)
// }

// //Not Jonas own property
// Persona.prototype.lastname = "Smith"


// var prueba1 = new Persona('Jonas', 25, 'teacher', 55)
// prueba1.yearOfBirth()
// console.log(prueba1)
// console.log(john)


// console.log(prueba1.hasOwnProperty('name'))
// console.log(prueba1.hasOwnProperty('lastname'))

// console.log(prueba1 instanceof Persona)
// console.log(prueba1 instanceof Object)
// console.log(prueba1 instanceof Array)

// prueba1.name === 'juan' ? console.log('es juan') : console.log('no es juan')


// // Creating Object

// var personaProto = {
//     name: "Juan",
//     lastName: 'smith'
// }


// let juan = Object.create(personaProto)
// console.log(juan)

// //Variables and primitives

// var a = 23
// var b = a
// a = 46

// console.log(a, b)

// var ob1 = {
//     name: 'juan'
// }

// var ob2 = ob1

// ob1.name = 'pedro'

// console.log(ob1)
// console.log(ob2)

// //Functions

// var age = 27
// var ob = {
//     name: 'john',
//     city: 'sdq'
// }

// function change(a,b){
//     a = 30
//     b.city = 'sf'
// }

// change(age, ob)

// console.log(age)
// console.log(ob.city)

//First class functinos

