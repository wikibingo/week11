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

const calArea = (r) => {
    const pi = 3.14159;
    if(isNaN(r) === false){
        const area = pi * r **2;
        alert(`The area of a circle with radius ${r} is ${area}`);
        return area;
    }
    else{console.log('Invalid input')}
}

let r = prompt('enter a radius:');
calArea(r);
//----------------------------------------------------------------------------
//neda example
function calCircleArea(radius)
{
    if(isNaN(radius)){
        alert("This is not a number");
        //return undefined by default
    }else{
        const area = Math.PI * radius **2;
        return area;
    }
}

let userValue = prompt("enter a number:");
//prompt always returns a string
let result = calCircleArea(userValue);
alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}`)
