// //ES5

// // var name = 'Juan'
// // var age = 15

// // name = 'Jose'
// // console.log(name + age);    


// //ES6
// //let and const
// // const name = 'Juan'

// //Esto no se puede
// // name = 'Jlio'
// // console.log(name);

// // functions ES5

// function probarFuncion(validacion) { 

//     if (validacion) { 
//         console.log(name1)
//         var name1 = "Juan"
//         var age1 = 10
//     }

//     console.log(name1 + age1)

// }

// // functions ES6

// function probarFuncion2(validacion) {

//     console.log(name2) 
//     let name2;
//     const age2 = 10


//     if (validacion) {

//         name2 = "Juan"
//     }

//     console.log(name2 + age2)

// }

// probarFuncion(true)
// probarFuncion2(true)

//Blocks and IIFEs

// { 

//     const a = 1
//     let b = 2
//     var a = 1
//     var b = 2
// }

//Arrow functions

// const years = [1990, 1992, 1994, 2010]

// var ages = years.map(el => 2020 - el )
// console.log(ages)

// ages = years.map((el, index) => index)
// console.log(ages)


// ages = years.map((el, index) => { 
//     const now = new Date().getFullYear()
//     let age = now - el;
//     return "Age " + age + " index " + index
// })

// console.log(ages)


//Arrow functions 2

// var box5 = {
//     color:'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;

//         document.querySelector('.green').addEventListener('click', function () { 

//             var str = 'This box is number ' + self.position + self.color
//             console.log(str)

//         })
//     }
// }

// box5.clickMe()

// Arrow functinos 2

//ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {

//         var usableColor = this.color
//         var usablePosition = this.position

//         document.querySelector('green') / addEventListener('click', function () { 
//             alert(usableColor)
//         })

//      }
// }

// box5.clickMe();

//ES6

// const box5 = {
//     color: 'green',
//     position: 1,
        // clickMe: (){} asi funciona
//     clickMe:  ()=> { asi no mantiene el this


//         document.querySelector('green') / addEventListener('click', () => {
//             alert(this.color)
//         })

//     }
// }

// box5.clickMe();

//Another example

// function Person(name) { 
//     this.name = name
// }

// Person.prototype.myFriends5 = function (listFriends) { 

//     var arr = listFriends.map((el) => { 
//         return  this.name + ' is friend with ' + el
//     })

//     console.log(arr)

// }

// var friends = ['bob', 'jane', 'mark']
// new Person('John').myFriends5(friends);

//Destructuring


//ES5

// var john = ['John', 26]
// var name = john[0]
// var age = john[1]

// //ES6

// const [name, year] = ['john', 26]
// console.log(name)
// console.log(year)

// const test = {
//     firstName: 'gis',
//     lastName: 'zamorano'
// }

// const { firstName, lastName} = test;
// const { firstName: a, lastName: b } = test;

// console.log(firstName, lastName)
// console.log(a, b)

// function calcAgeRetirement(year) { 
//     const age = new Date().getFullYear() - year
//     return [age, 65 - age]
// }

// const [age2, retirement] = calcAgeRetirement(1990)
// console.log(age2)
// console.log(retirement)

//Arrays

// const boxes = document.querySelectorAll('.box')

// const boxesArray = Array.from(boxes)
// boxesArray.forEach(cur => cur.style.backgroundColor = 'dodgerblue')

// for (const el of boxesArray) { 

//     if (el.className.includes('blue')) { 
//         continue;
//     }

//     el.textContent = 'Now Im blue'

// }

// var ages = [34, 53, 12, 5, 1, 54, 23, 76]

// const fullAge = ages.map((el) => { 
//     return el >= 18
// })


// console.log(fullAge)
// console.log(ages.findIndex(cur => cur >= 18))
// console.log(ages.find(cur => cur >= 18))
// // console.log(fullAge.indexOf(true))

//The Spread Operator

// function addFourAges(a, b, c, d) { 
//     return a+b+c+d
// }

// var test = [1, 2, 3, 4]
// // console.log(test)

// const max = addFourAges(...test)
// console.log(max)

// const arr1 = ["a", "b", "c"]
// const arr2 = [1, 2, 3]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const h = document.querySelector('h1')
// const box = document.querySelectorAll('.box')

// const nueva = [h, ...box]
// Array.from(nueva).forEach(el => 
//     el.style.color = 'purple'
// ) 

//Rest Parameters

// function fullAge5() { 
//     // console.log(arguments)
//     var argsArray = Array.prototype.slice.call(arguments)
//     argsArray.forEach(function (el) { 
//         console.log((2020 - el) >= 18)
//     })
// }

// fullAge5(1990,2010,2008)

// function fullAge6(...years) {
    
//     years.forEach(element => {

//         console.log(element >= 2000)
        
//     });

// }


// fullAge6(1990,2010,2008)


// function fullAge6(limit, ...years) {

//     years.forEach(element => {

//         console.log(element >= limit)

//     });

// }


// fullAge6(20, 22,12,32,5)

//Default parameters

// function SmithMember(firstName, yearOfBirth, lastName = "Smith") { 
//     this.firstName = firstName
//     this.yearOfBirth = yearOfBirth
//     this.lastName = lastName
// }

// var juan = new SmithMember('Juan', 1990)

//MAPS

// const question = new Map();
// question.set('Pregunta', 'MascotaFavorita')
// question.set(1, 'Perro')
// question.set(2, 'Gato')
// question.set(3, 'Pez')
// question.set(4, 'Caballo')
// question.set('Correcto', 1)
// question.set(true, 'correct answer')
// question.set(false, 'try again')

// question.forEach((element, val) => {

//     console.log(element, val)
    
// });

// for (let [key, val] of question.entries()) { 

//     if(typeof(key) === 'number')

//     console.log(key,val)

// }

// let correctAnswer = question.get('Correcto')
// console.log(question.get(1))
// console.log(question.get(2))
// console.log(question.get(3))
// console.log(question.get(4))

// let pregunta = prompt(question.get('Pregunta'))


// console.log(pregunta)
// pregunta == correctAnswer ? alert(question.get(true)) : alert(question.get(false))

//Clases


// class Person{

//     constructor(name, year, job) { 
//         this.name = name
//         this.year = year
//         this.job = job
//     }

//     calcAge() { 

//         console.log(2020 - this.year)
//     }

//     //Objects cant use it
//     static greet() { 
//         console.log('Hello')
//     }

// }

// var juan = new Person('Juan', 2000, 'Teacher')
// juan.calcAge()
// Person.greet()

//Subclasses and Inheritance

class Person{ 

    constructor(name, year, lastname) {
        this.name = name
        this.year = year
        this.lastname = lastname
    }

}

class Atlethe extends Person { 

    constructor(name, year, lastname, medals, sport) {
        super(name, year, lastname)
        this.medals = medals
        this.sport = sport
    }

}

var juan = new Atlethe('Juan', 1990, 'Perez', 1, 'Atletismo')