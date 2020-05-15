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

// var firstName = "john"; //came case
// var first_name = "sarah";   //underscore
// var FirstName = 'tom';  //pascal case used for constructor function

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

// const num1 = 100;
// const num2 = 50;
// let val;

// //simple math with numbers
// val = num1 + num2; // 150
// val = num1 * num2; // 5000
// val = num1 - num2; // 50
// val = num1 / num2; // 2
// val = num1 % num2; // 0

// // Math object
// val = Math.PI;//3.141592653589793
// val = Math.E;//2.718281828459045
// val = Math.round(2.8);//3
// val = Math.round(2.4);//2
// val = Math.ceil(2.4);//3
// val = Math.floor(2.8);//2
// val = Math.sqrt(64)//8
// val = Math.abs(-3);//3
// val = Math.pow(8, 2); //64
// val = Math.min(2, 33, 4, 1, 55, 3, -2); //-2 
// val = Math.max(2, 33, 4, 1, 55, 3, -2); //55

// val = Math.random(2, 33, 4, 1, 55, 3, -2); //0.xxxxx
// val = Math.random() * 20; // decimal
// val = Math.floor(Math.random() * 20 + 1); // whole numbers excl 0


// console.log(val);

//---------STRING METHODS AND CONCATENATION---------

// const firstName2 = 'William';
// const lastName2 = 'Johnson';
// const age = 36;
// const str = 'hello there my name is Brad';
// const tags = 'web, web developer, programmer';

// let val;

// //concatenate
// val = firstName2 + ' ' + lastName2;

// //append
// val = 'Brad ';
// val += 'Traversy'; //Brad Traversy

// val = 'Hello, my name is ' + firstName2 + ' and I am ' + age;

// //escaping
// val = 'That\'s great, I can\'t wait';

// //length
// val = firstName2.length;//7

// //concat
// val = firstName2.concat(' ', lastName2);//William Johnson

// //Change case
// val = firstName2.toUpperCase();//WILLIAM
// val = lastName2.toLowerCase();//johnson

// val =  firstName2[0];//W
// val = lastName2[10]//undefined

// //indexOf()
// val = firstName2.indexOf('m')//6
// val = firstName2.indexOf('l')//2
// val = firstName2.lastIndexOf('l');//3 coming from the back

// //charAt()
// val = firstName2.charAt('2');//

// //get last character
// val = firstName2.charAt(firstName2.length -1);//m

// //substring
// val = firstName2.substring(0, 4);//Will

// //slice() = mostly used to pull things out of arrays
// val = firstName2.slice(0, 4);//Will
// val = firstName2.slice(-3);//iam

// //split() = split a string into an array
// val = str.split(' ');//["hello", "there", "my", "name", "is", "Brad"]
// val = str.split('');//["h", "e", "l"....]
// val = str.split(' ').length;//6
// val = str.split('').length;//27

// val = tags.split(',')//["web", "web developer", "progammer"]

// //replace()
// val = str.replace('Brad', 'Jack');//hello there my name is Jack

// //includes()
// val = str.includes('Hello');//false
// val = str.includes('hello');//true
// val = str.includes('Brad');//true


// console.log(val);

//-------TEMPLATE LITERALS-----------

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Sydney';
// let html;

// function hello(){
//     return 'hello';
// }

// // Without template strings

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' + 
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>'

// //With template strings

// html = `
//     <ul>
//         <li>Name: ${name}</li> 
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2+4}</li>
//         <li>${hello()}</li>
//         <li>${age >= 30 ? 'Over 30' : 'under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

 
//---------ARRAYS AND ARRAYS METHODS-----

//create some arrays
// const numbers = [43, 56, 33, 23, 44, 46, 5];
// const numbers2 = new Array(22, 45, 76, 54);
// const fruit = ['apple', 'banana', 'orange', 'pear'];
// const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

// let val;

// //get array length
// val = numbers.length//7

// //check if is array
// val = Array.isArray(numbers);//true
// val = Array.isArray('hello');//false

// //get a single value from an array
// val = numbers[0];//43

// //insert into an array
// numbers[2] = 100;//[43, 56, 100, 33, 23, 44, 46, 5]

// //find index of value
// val = numbers.indexOf(100);//2

//----------MUTATING ARRAYS

// //add to the end
// numbers.push(255);//[43, 56, 100, 23, 44, 46, 5, 255]
// //add to the beginning
// numbers.unshift(120);//[120, 43, 56, 100, 23, 44, 46, 5, 255]

// //remove from end
// numbers.pop();//255 is gone
// //remove from beginning
// numbers.shift();//120 removed

// //splice values
// numbers.splice(1, 1);//56 is gone
// numbers.splice(0, 1)//43 is gone

// //reverse the array
// numbers.reverse();//[5, 46, 44, 23, 100]

// //concatenate arrays
// val = numbers.concat(fruit);//[5, 46, 44, 23, 100, "apple", "banana", "orange", "pear"]

//sort
// val = fruit.sort();//["apple", "banana", "orange", "pear"]
// // val = numbers.sort();//[100, 23, 43, 44, 46, 5, 56]

// // //use the compare function
// // val = numbers.sort(function(a, b){
// //     return a - b;
// // })//[5, 23, 43, 44, 46, 56, 100]

// // //reverse sort
// // val = numbers.sort(function(a, b){
// //     return b - a;
// // })//[100, 56, 46, 44, 43, 23, 5]


// // find
// function over50(num){
//     return num > 50;
// }

// val = numbers.find(over50);//56 first number over 50

// console.log(numbers);
// console.log(val);


//---------OBJECT LITERALS------
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 39,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear : function(){
//         return 2020 - this.age;//if it's just age, you get an error
//     }
// }

// let val;

// val = person;//{firstName: "Steve"}
// //get specific value
// val = person.lastName;//Smith
// val = person.firstName;//Steve
// val = person.age;//30
// val = person.hobbies//["music", "sports"]
// val = person.hobbies[1]//sports
// val = person.address;//{city: "Miami", state: "Florida"}
// val = person.address.state;//Florida
// val = person.getBirthYear();//1981

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23}
// ]

// for(let i=0; i < people.length; i++){
//     console.log(people[i])
// }   //{name: "John", age: 30}
//     //{name: "Mike", age: 23}

// for(let i=0; i < people.length; i++){
//     console.log(people[i].name)
// }// John Mike


//----------DATES AND TIMES -----------

// let val;

// const today = new Date();
// let bDay = new Date('11-18-,1981');
// bDay = new Date('September 10 1981');
// bDay = new Date('11/18/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// bDay.setMonth(2);
// bDay.setDate(12);
// bDay.setFullYear(1983);
// bDay.setHours(3);
// bDay.setMinutes(30);


//------IF STATEMENTS AND COMPARISON OPERATORS ------

// const id = 100

//correct way in testing if something is undefined use typeof

// if(typeof id !== 'undefined'){
//     console.log(`the id is ${id}`)
// } else {
//     console.log('no id');
// }


//greater than or less than
// if (id >= 200){
//     console.log('correct');
// } else {
//     console.log('incorrect')
// }

//if else
// const colour = 'blue';

// if (colour === 'red'){
//     console.log('colour is red');
// } else if (colour === 'blue'){
//     console.log('colour is blue')
// } else {
//     console.log('other colour')
// }


//logical operators

// const name = 'Steve';
// const age = 4;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`)
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`)
// } else {
//     console.log(`${name} is an adult`)
// }

// // OR ||

// if(age < 16 || age > 65){
//     console.log(`${name} cannot run in the race`)
// } else {
//     console.log(`${name} is registerred in the race`)
// }

// //TERNARY OPERATOR
// console.log(id === 100 ? 'correct' : 'incorrect');


//---------SWITCHES---------
// const colour = 'yellow';

// switch(colour){
//     case 'red':
//         console.log('colour is red');
//         break;
//     case 'blue':
//         console.log('colour is blue');
//         break;
//     default:
//         console.log('colour is not red or blue')
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0: 
//     day = 'Sunday';
//     break;

//     case 1: 
//     day = 'Monday';
//     break;

//     case 2: 
//     day = 'Tuesday';
//     break;

//     case 3: 
//     day = 'Wednesday';
//     break;

//     case 4: 
//     day = 'Thursday';
//     break;

//     case 5: 
//     day = 'Friday';
//     break;

//     case 6: 
//     day = 'Saturday';
//     break;
// }

// console.log(`today is ${day}`)//today is Friday


//------FUNCTION DECLARATIONS AND EXPRESSIONS-----

//function declarations
// function greet(firstName = 'John', lastName = 'Doe'){
//     return 'hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('Steve', 'Smith'));

// //function expression
// const square = function(x){
//     return x*x;
// };

// function square2(x = 7){
//     return x*x;
// }

// console.log(square(8))//64
// console.log(square2(5))//25


//immediately invokeable function expression - IIFE
//it's a function that you declare and run at the same time

// (function(){
//     console.log('IIFE Ran...');
// })();

(function(name){
    console.log('Hello ' + name);
})('Sam');

