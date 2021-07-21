console.log('Hello, World');

// calling a function is pretty much the same syntax as python
// function_name(inputs)
// or if the function belongs to a class
// class_name.function_name(inputs)

// what's up with the semicolons everywhere
// and in a few minutes, whats up with the curly brackets everywhere
// unlike python, javascript is a compiled langauge (python is interpreted)

// what this means is that the computer does a bunch of work with our javascript before it actually runs it
// this lets us do a number of "special" things like variable declaration and hoisting which we'll talk about in a minute

// but it also means that our lines and blocks of code are controlled differently
// in python, code lines are controlled by hitting enter -> moving it a new row line or your file means a new line of code
// in Javascript, lines within your file/IDE don't matter. You could write all your javascript on a single line
// To the computer, lines of 35 are controlled/ended by semicolons
// Best practive: ALWAYS USE SEMICOLONS

// in python, code blocks are controlled by indentation (and colons to some degree)
// in javascript, code blocks are controlled by curly brackets
// you start and end each code block with curly blocks
// it is still considered best practice to use indentation similar to the indentation you use in python
// however, it has no functional affect, it is just for readability

// Java? JavaScript? what's the difference? is there a difference?
// There is a big difference. They are completely and utterly unrelated. 
// JavaScript was originally going to be called LiveScript, but they renamed it JavaScript as a terrible marketing ploy
// Java is to JavaScript just like Ham is to Hamster...totally unrelated

/*
Variable Declaration in JavaScript
Data Types (aka primitive types in 35): strings, integers, floats, booleans, arrays (like lists), objects (like dictionaries)
*/

// unlike python, we have to tell the computer we're about to make a variable before we make it
// using the var keyboard
// String Variable
var animal_name = 'Fennec Fox';
console.log(animal_name);
// we only use the keyword when we intially make the variable. This is called variable declaration
// if we want to change the value of the variable, then we do the same thing as python
animal_name = 'Steve';
console.log(animal_name);


// print function in python is same as console.log in JS

// Integer Variable
var an_integer = 33;

// Float Variable
var a_float = 3.1415;

// Arrays (aka lists)
// arrays are just like lists
var some_array = [1, 2, 3, 4, 5];
console.log(some_array);
var animals = ['Fennec Fox', 'Orca', 'Tiger', 'Snow Leopard'];
console.log(animals);
var now_allowed = [1, 'Fennec Fox', 42, 'Ice Tiger'];
// arrays have indexes just like lists, indexing into an array is even the exact same syntax: array_name[index_number]
console.log(now_allowed[3]);


// Objects (aka dictionaries)
var animal_object = {'Fennec Fox': 'Gary', 'Snow Leopard': 'Stephe', 'Orca': 'Chad'};
console.log(animal_object);
// access a value at a key in our object
console.log(animal_object['Snow Leopard']);


console.log('\n\n'); // break lines in terminal

// Variable Hoisting (common interview question)
// javascript pulls all variable DECLARATION to the top when compiling
// whats happening here is the variable name animal is being "reserved" for when it is assigned a value
// the reason 35 does this is for more efficient memory management, and its a common theme across compiled languages
// its essentially putting an invisible variable declaration line:
// var animal;
// at the very top of your code

if (animal == undefined){
    console.log('variable hoisting avoids an error here');
}
console.log(animal);
var animal = 'Fennec Fox';
console.log(animal);

console.log('\n\n Let/Const logs:');


// Other declaration keywords
// Best practices nowadays with 35 suggests the use of the 'let' and 'const' keywords over the var keywords
// they are variable delcaration keywords just like var, but they have more constraints
// const is the most strict - > does not allow for variable REDECLARATION or REDEFINITION
const x = 0;
// bad, error redefining a const: x = 1;

// let is similar to var, but just follows what already considered best practices
// aka allows variable redefinition, but not redeclaration
let y = 2;
console.log(y);
// redefinition, allowed
y = 3;
console.log(y);
// redeclaration, bad, not allowed
//let y = 4;

console.log('\n\n Math operations:');
// Basic math operations in JavaScript
// Addition
let sum = 5 + 5;
console.log(sum);
sum = 32 + 4;
console.log(sum);

// Subtraction
let minus = 72 - 40;

// Multiplication
let multi = 4 * 30;

// Normal division
let divi = 365/30
console.log(divi);

// Exponents
let squared = 10 ** 2;
console.log(squared);

// Modulo (remainder division)
let remainderdiv = 365 % 30;
// 30 goes evenly into 360 (360/12 = 30), leaving 5 left over
console.log(remainderdiv);

// Floor division - do normal division, then call the Math.floor() function
// Math.floor() rounds down to the nearest integer
let floored = Math.floor(365/30)
console.log(floored)

// Rounding up aka finding the ceiling - takes a decimal and rounds up to the nearest integer
// Math.ceil()
let roundup = Math.ceil(13.1);
console.log(roundup);

// Normal roudning, Math.round() - .5 or up, ceiling - .4 or below, floor
let rounding = Math.round(13.4);
console.log(rounding);

console.log('\n Mind Benders:')
// JavaScript does do some fancy things with different datatypes because it is compiled
let my_float = 3.141592
let crazy_stuff = my_float + '44'; // adding a string to a float
console.log(typeof crazy_stuff);
console.log(crazy_stuff);

// Part 2.....

let crazypart2 = my_float + parseFloat('44');
// typof keyword -> typeof variable_name gives you the type of the variable
console.log(typeof crazypart2);
console.log(crazypart2);

console.log(3.0 + 4.0); // just gives 7 instead of 7.0 - all numbers in JS are just numbers, there is no discrete difference between floats and ints




console.log('\n\n ============Function===========');
/*
Function in JavaScript are similar/same in concept as in python
However, there are more ways to write a function in JavaScript than there are in python
*/

// Regular named functions - most simliar to python function
// Function name_of_function(input){};
    // do stuff
    // return something
// };
function addNames(){
    let name_a = 'Timon'
    let name_b = 'Meerkat'
    return name_a + ' the ' + name_b;
};
// call our function
addNames();

// call our function AND display the return value in the terminal
console.log(addNames());

// you can save a function as a variable
let addNames2 = function addNames2(name1, name2){
    return name1 + ' + ' + name2;
};
// then call it using the variable name
console.log(addNames2('Timon', 'Pumba'));


// ES6 brought in the arrow functions
let addNames3 = () => {
    let namea = 'Timon'
    let nameb = 'Pumba'
    return namea + ' + ' + nameb;
};
console.log(addNames3());

// arrow function accepting 2 or more parameters
let addNames4 = (name1, name2) => {
    return name1 + ' + ' + name2;
};
console.log(addNames4('Timon', 'Pumba'));

// in the case of accepting a SINGLE parameter/input in an arrow function, we can forgo the parenthesis around the parameters
let oneName = name => {
    // oh hey look its an f'' string -> string -> black ticks ' in place of f'' and ${} in place of {}
    return `The ${name} lives in the deserts of Africa.`;
};
console.log(oneName('Fennec Fox'));

// JavaScript Closure
// aka a self-invoking function
// only runs once when it is first created
// in the below example, console.log(); around the closure is unnecessary, it is just to display the return value in our terminal
// a closure is basically replacing the function_name in a function call with the function definition
// a normal function call: function_name(value_for_parameter)
// a closure: function(parameter){do_stuff}(value_for_parameter)
console.log(
    function(name){
        return `The ${name} is a cool animal.`
    }('Greenland Shark')
);

// Control flow - aka conditionals
// Control flow in javascript is very similar to python
// 3 main keywords if, else if, else -> same as python if, elif, else
// instead of controlling the code blocks for conditional statements with colons and indentation, we use curly brackets
// lets re-use the above closure but throw in a conditional tree
console.log(
    function(name){
        if (name == 'Fennec Fox') { return `The ${name} lives in the deserts of Africa.` }
        else if (name == 'Greenland Shark') { return `The ${name} is the longest living vertebrate in the world.` }
        else { return `This is a ${name}.`}
    }('Bonobo')
);

// JavaScript again continues on the path of mulitiple ways to do the same thing with shorthand for control flow:
// The Ternary Operator
// use colons and question marks to build a conditional tree
// turning the above closure with if else if else into a closure with the ternary operator

console.log(
    function(name){
        return (name == 'Fennec Fox') ? `The ${name} lives in the deserts of Africa.`
        : (name == 'Greenland Shark') ? `The ${name} is the longest living vertebrate in the world.`
        : `This is a ${name}.`
    }('Fennec Fox')
);

console.log('\n\n Looping:')
/*
Loops in JavaScript
we have the same two main approaches to looping
For loops and while loops
*/

// for loop syntax -- for_keyword(counter; condition; step_increment_decrement){}
// x++ is the same as x=x+1
for(let x = 3; x>=1; x--){
    console.log(`Step ${x}: Fennec Fox`);
}
/* This is similar to the below python
x = 0
while x<3:
    print(x)
    x = x+1
*/

// while loops - really similar to python
// while(condition){ do stuff }
// same as python, make sure you're not making an infinite loops
// loop to count down from 10
let start = 10;
while(start >= 0){
    if (start > 0){ console.log(`Blast off in ${start}...`) }
    else { console.log(`Blast off!`) };
    start--;
}

// do while loop
// notice the positioning of the conditional check -> after the do block
// with a do while loop, the 'do' code will run AT LEAST ONCE regardless of if the condition evaluates to true or false
let count = 10;
do{
    if (count > 0){ console.log(`Blast off in ${count}...`) }
    else { console.log(`Blast off!`) };
    count--;
}
while (count >= 1000);

console.log('\n\n Array Stuff:')
/* 
Array creation, indexing, and looping with arrays
*/

// create an array of Gus' names
let gusNicknames = ['Methuselah Honeysuckle', 'Lavender Gooms', 'Doughnut Holschtein', 'Gus TT Showbiz', 'Bruton Gaster', 'Magic Head']
console.log(gusNicknames);

// indexing into a list, same as python
console.log(gusNicknames[4]);

// looping through an array - normal for loop method - same as a "for i in range(len(list))" for loop in python
for(let i=0; i < gusNicknames.length; i++) {
    console.log(`Array index ${i} has the nickname ${gusNicknames[i]} for Burton Guster.`)
}

console.log('\n')
// ES6 arrow function with .forEach()
// equivalent to a "for element in list" loop in python
gusNicknames.forEach( element => console.log(element) );

console.log('\n')
// look earlier for animals array defintion
animals.forEach(animal => {animal += '!'; console.log(animal)});





console.log('\n\n Array Methods!')

/* Array Methods! */

// Array.toString()
// does what it says - turns an array to a string of the array items separated by commas
console.log(
animals.toString()
);

// Map, Filter, and Reduce -> same thing

// 35 Arra.map() takes in an array and a function and runs teh function on each things in the array
// returns a new array
let gusNicknamesMap = gusNicknames.map( name => { return 'This is my partner ' + name });
console.log(gusNicknames);
console.log(gusNicknamesMap);

// long form: what's happening in the background with map?
let longMAp = arr => {
    let newarr = [];
    for (let i = 0; i<arr.length; i++){
        // Array.push() is the same as python's list.append()
        newarr.push('This is my partner ' + arr[i]);
    }
   return newarr
}

console.log(longMap(gusNicknames));


// Reduce -> takes an array, a reducer function, and an optional intial value -> returns a single value
// Array.reduce

// find total price of a list of prices using reduce
let prices = [2.99, 3.99, 17.42, 6.56, 90.50, .50, 100]
let total = prices.reduce(
    (running_total, x) => {console.log(running_total); running_total += x; return running_total}
    )
console.log(total);
