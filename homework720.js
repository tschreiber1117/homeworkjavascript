/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:["Anything not from Taco bell"],
    burgers:["Portillos Burgers"],
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:["Chocolate"],
        dunkin:["Vanilla"],
        culvers:["All of them"],
        mcDonalds:["Sham-rock-shake"],
        cupids_candies:["Chocolate Malt"]
    }]
}
function foodperson(){
    console.log(Object.keys(person3));
    console.log(Object.values(person3));
}
foodperson()




        //=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/



function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`This is ${this.name} and they are ${this.age} years old`);
    }

let prototype1 = new Person ('Turd Ferguson', 50);
    console.log(turd_ferguson);
    console.log(turd_ferguson.name);
    turd_ferguson.printInfo();


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo(){
        console.log(`This is ${this.name} and they are ${this.age} years old`);
    }
}
let prototype2 = new Person('Wayne Campbell', 38);
console.log(prototype2.name);
prototype2.printInfo();
}
