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