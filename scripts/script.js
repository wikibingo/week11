function greet (name){
    console.log(`Hello ${name}!`)
};

const greet = function(name){
    console.log(`Hello ${name}!`)
};

const greet = (name) =>{
    console.log(`Hello ${name}!`)
};

const greet = name => console.log(`Hello ${name}!`); #can remove parenthesis if only one parameter, can remove brackets if only one statement 

let input = prompt("enter name:");
greet(input)

const greet = (name, time = "day") =>{
    console.log(`Hello ${time} ${name}!`)
};