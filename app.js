// Log to console
// console.log('Hello world');
// console.log(123);
// console.log(true);
// let greeting = 'hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.table({a:1, b:2, c:3});

// console.error('This is some error');
// console.clear();// clears everything
// console.warn('this is a warning');

// console.time('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
// console.timeEnd('Hello world');

//--------------var, let, const

// var name = 'John Doe';
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

//letters, number, _, $
// cannot start with a number

//Multiword vars

var firstName = "john"; //came case
var first_name = "sarah";   //underscore
var FirstName = 'tom';  //pascal case used for constructor function

// let name = 'John Doe';
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// const name = 'John Doe';
// console.log(name);
//have to assign a value

// const person = {
//     name: 'john',
//     age: 30
// }

// person.name = 'sarah';

// // console.log(person.name);

// const people = ['tom', 'dick', 'harry'];
// people.push('sarah'); // tom, dick, harry, sarah
// people.unshift('jim');  // jim, tom, dick, harry, sarah

// console.log(people)

//--------PRIMITIVE DATA TYPES--------
//string
//numbers = integers, decimals, floats
//boolean
//null = empty value
//undefined = a variable that has not been assigned a value
//symbols

// const name = 'john doe';
// console.log(typeof name) //string

// const number = 38;
// console.log(typeof number) // number

// const hasKids = true;
// console.log(typeof hasKids); //boolean

// const car = null;
// console.log(typeof car);//object? this is a bug

// let test;
// console.log(typeof test); //undefined

// const sym = Symbol();
// console.log(typeof sym); //symbol

// //-------- REFERENCE DATA TYPES -----------
// //arrays
// //object literals
// //functions
// //dates
// //anything else

// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies); // object

// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// console.log(typeof address); //object

// const today = new Date();
// console.log(today); //Fri May 01 2020
// console.log(typeof today); //object

// --------TYPE CONVERSION --------
// let val;

// // number to string
// val = 5;
// val = String(5); // length = 1
// val = String(4+8); // length = 2 

// //Boolean to a string
// val = String(true); // length = 4

// //Date to string
// val= String(new Date()); // writes the entire date. 
//                         // length = 68

// //Array to string
// val = String([1,2,3,4]); // 1,2,3,4     length=7 (int and commas)

// //toString()
// val = (5).toString(); // acts the same as String(5)
// val = (true).toString(); //same as String(true);
// val = (new Date()).toString(); //same as String(new Date());

// // String to numbers
// val = Number('5');// toFixed 5.00

// // Boolean to number
// val = Number(true);// toFixed 1
// val = Number(false);// toFixed 0
// val = Number(null); // toFixed 0
// val = Number('hello')// toFixed NaN
// val = Number([1,2,3,4])// toFixed NaN

// //parseInt
// val = parseInt('100')//100
// val = parseFloat('100.20')// toFixed 100.20
// val = parseInt('hello')// NaN
// val = parseInt(false);// NaN

// console.log(val);
// console.log(typeof val);
// // console.log(val.length); //undefined because length from a number doesn't work
// console.log(val.toFixed(2));

// type cohersion
// val1 = '5';
// val2 = 6;
// sum = Number(val1 + val2); //number

// console.log(sum); //56
// console.log(typeof sum); //string



//-------Numbers and the Math Object ------

const num1 = 100;
const num2 = 50;
let val;

//simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math object
val = Math.PI;//3.141592653589793
val = Math.E;//2.718281828459045
val = Math.round(2.8);//3
val = Math.round(2.4);//2
val = Math.ceil(2.4);//3
val = Math.floor(2.8);//2
val = Math.sqrt(64)//8
val = Math.abs(-3);//3
val = Math.pow(8, 2); //64
val = Math.min(2, 33, 4, 1, 55, 3, -2); //-2 
val = Math.max(2, 33, 4, 1, 55, 3, -2); //55

val = Math.random(2, 33, 4, 1, 55, 3, -2); //0.xxxxx
val = Math.random() * 20; // decimal
val = Math.floor(Math.random() * 20 + 1); // whole numbers excl 0


console.log(val);