// Let's continue with a bit more control flow
// Control flow covers our conditionals, ternary operators, that kind of stuff

// JS gives us another option for creating a control flow pattern
// Switch case statement
// another way to write if var = 1 elif var = 2 elif var = 3 else

//Switch case statement syntax:
let x = 14;

switch(x){
    case 0:
        console.log('X is 0');
        break;
    case 1:
        console.log('X is 1');
        break;
    case 2:
        console.log('X is 2');
        break;
    default:
        console.log('X is not 0, 1, or 2');
        break;
}


// Switch case for days of the week
let day = 'Tuesday';

switch(day){
    case 'Monday':
        console.log('Today is Monday. Write some code!');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday. Write some code!');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday. Write some code!');
        break;
    case 'Thursday':
        console.log('Today is Thursday. Write some code!');
        break;
    case 'Friday':
        console.log('Today is Friday. Write some code!');
        break;
    case 'Saturday':
        console.log('It is the weekend.');
        break;
    default:
        console.log('This date makes no sense.');
        break;
}

console.log('\n\n ======= JS Objects =======');

// JavaScript objects are similar in concept to python objects
// However in classic javascript fashion, there are multiple ways we can make them


// Simple javascript object is most similar to a python dictionary
// Define a variable, assign key-value pairs as the object's attributes
let person = {
    name: 'Burton',
    age: 33,
    favorite_color: 'Blueberry'
}

// can access values either with same syntax as python dictionary
// bracket notation
console.log(person['name']);

// or as python object
// dot notation
console.log(person.name);

// create a new attribute- occupation
person.occupation = 'Pharmaceutical Sales'
console.log(person.occupation);

// JS objects can contain other objects and more detailed data structures
let detailedPerson = {
    name: 'Burton',
    age: 33,
    favorite_color: 'Blueberry',
    occupations: ['Pharmaceutical Sales', 'Psychic Detective'],
    nicknames: {
        season1: ['Francois', 'The Jackal', 'Earnest Lambert Watkins', "D'Andre"],
        season2: ['Ovaltine Jenkins', 'Gus TT Showbiz', 'Galileo Humpkins', 'Lavender Gooms']
    }
}

// accessing those attributes is the same sort of chain-accessing as python dictionaries
console.log(
    detailedPerson.nicknames.season2[2]
);

console.log('\n');
// Object prototype methods -> which operate on objects
// Object.keys(obj) and Object.values(obj) just like python's dict.keys() and dict.values()
console.log(Object.keys(detailedPerson));
console.log(Object.values(detailedPerson));

console.log('\n');
// access the nickname 'Galileo Humpkins' from within detailedPerson's values
console.log(Object.values(detailedPerson)[4].season2[2]);


console.log('\n');
// Looping through the keys or values in a JS object
// keys
let keys = Object.keys(detailedPerson);
for(let i=0; i<keys.length; i++){
    console.log(`The value at the key ${keys[i]} is ${detailedPerson[keys[i]]}.`)
}

// values
let values = Object.values(detailedPerson);
for(let i=0; i<values.length; i++){
    console.log(`The value we're looking at is ${values[i]}.`)
}


console.log('\n\n Custom Object Prototypes:\n Function Based:')
// Create our own Object prototypes - much more similar to a python object class
// There are two ways to do this in Javascript
// One is the ES5 way, less common now -> function based objects
// One is the new ES6 way, most similar to python objects -> class based objects

// ES5 - function based objects
function Animalfx(name, legs, color){
    this.name = name;
    this.legs = legs;
    this.color = color;

    // A JS Method inside of this object prototype
    this.printInfo = () => {
        console.log(`This is a ${this.name}. It is ${this.color} with ${this.legs} legs.`);
    }
}

// create an Animal
let fennec_fox = new Animalfx('Fennec Fox', 4, 'light brown');
console.log(fennec_fox);
console.log(fennec_fox.name);
fennec_fox.printInfo();

console.log('\n Class based:')
// Most modern approach to javascript objects -> class based objects
// Most similar to a python object
class Animalcls{
    // constructor function is the same as __init__ pretty much
    constructor(name, legs, color){
        this.name = name;
        this.legs = legs;
        this.color = color;
    }

    // a class method
    printInfo(){
        console.log(`This is a ${this.name}. It is ${this.color} with ${this.legs} legs.`);
    }

    // a class method
    func_to_be_inherited(){
        console.log('This is a function that will be inherited by the Fox class.')
    }
}

let icetiger = new Animalcls('Snow Leopard', 4, 'snow camo');
console.log(icetiger.name);
icetiger.printInfo();

/* Inheritance!
Inheritance lets us create classes (and of course class based objects) that share attriubtes, functionality, and methods with other classes!
A 'child' class that inherits from a 'parent' class will have all of the parent class' attributes and methods in addition to whatever new attributes and methods the developer decides to add */
console.log('\n Inheritance:');

// let's make a fox class that is a child of the animalcls class
class Fox extends Animalcls{
    constructor(name, legs, color, climate){
        super(name, legs, color);
        this.climate = climate;
    }

    some_random_class_method(){
        console.log('This is a new method belonging to the Fox class. It is not inherited from Animalcls.')
    }

    // method overriding: changing the behavior of an inherited method
    printInfo(){
        console.log(`This is a ${this.name}. It is ${this.color} with ${this.legs} legs. This inherited function has been overrided? overrode? overwritten? to include the climate: ${this.climate}.`);
    }
}

let fennec = new Fox('Fennec Fox', 4, 'light brown', 'desert');
let arctic = new Fox('Arctic Fox', 4, 'snow white', 'arctic tundra');
console.log(fennec);
console.log(fennec.climate);
fennec.some_random_class_method();
fennec.func_to_be_inherited();
console.log(arctic.name);
// child class' method inherited from the parent class is modified using method overriding
arctic.printInfo();

// parent class' method is not altered by method overriding - only the child class' method is altered
let pandatorpedo = new Animalcls('Orca', 0, 'black and white');
pandatorpedo.printInfo();