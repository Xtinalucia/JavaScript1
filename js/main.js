console.log('name')


// basics of JavaScript

/*

    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primitive Types: Strings, Numbers, Undefined, Null, Boolean
    Objects: Object, Arrays, Functions, Properties
    Control Flow in JavaScript

*/


// String declaration
var myName = 'Name'


// console.log() is equivalent to python's print()
console.log(myName);

var age;

console.log(age);

// Strings can be delimited by '',"", or ``. The tick marks `` have a special behavior to format.
console.log("My name ${myName}")
console.log('My name ${myName}')
console.log(`My name ${myName}`)

// Integer 

var myAge = 65

console.log(myAge);
console.log(typeof(myAge));

// Float
var pi = 3.14

console.log(pi);
console.log(typeof(pi));


// Booleans
var somebool = true
var someOtherbool = false;

console.log(somebool, someOtherbool);
console.log(typeof(somebool));


// Undefined

var something;
console.log(something);
console.log(typeof(something));


// Null

var someNull = null;

console.log(someNull);
console.log(typeof(someNull));

// Array

var myArray = [1, 2, 3]
console.log(myArray);
console.log(typeof(myArray));

// Arrarys indexable

console.log(myArray[0])

// Arrarys have lenth and attribute/property (keys or properties)
console.log(myArray.length)

// Object
var person = {
    first ='chris',
    last = 'tina',
    language = ['python', 'JavaScript']

}
console.log(person);
console.log(typeof(person));

// Bracket Notation

console.log(`My last name is ${person['last']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);

// Object holdin an Array

console.log(`Today we learn ${person.language[0]}`)

console.log(`Full name is  ${person['first']} ${person['last']}`)


//Let vs var let is block - scoped, var is global-scoped
let myCity = 'Chicago';
let myBday;

console.log(myBirthday);
console.log(typeof(myBirthday));

var adult = true;

if (adult) {
    var mySchool = 'Illinois';
    let color = 'Blue';
    console.log(color)
}

console.log(mySchool);
console.log(color);

//  const - similar to let (block scoped) - needs value when declared - cannot be reassigned

const myBday = true;
let ageOfPerson = 33;

if (mybday) {
    const myFAvColor = 'Orange';
    ageOfPerson = ageOfPerson +1; //Ok because age is declared with let
    console.log(ageOfPerson);
// myBday = false; // Error bc myBdaydeclared w/ cont so cannot be reassigned
};
console.log(myFAvColor);

const cities = ['Chicago','ROT']
console.log(cities);
cities[2] = 'Banff';
console.log(cities);
cities = ['Austin', 'Portland']

//Hoisting in JavaScript
console.log(hoist);
var hoist = 'example';

console.log(hoist);

/* Basic MAth Calcs
*/

//Addition



//Substraction


//Multiplication


//Division


//Exponents

//Modulo

//Floor Division
