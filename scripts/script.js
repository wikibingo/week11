// function greet (name){
//     console.log(`Hello ${name}!`)
// };

// const greet = function(name){
//     console.log(`Hello ${name}!`)
// };

// const greet = (name) =>{
//     console.log(`Hello ${name}!`)
// };

// const greet = name => console.log(`Hello ${name}!`); #can remove parenthesis if only one parameter, can remove brackets if only one statement 

// let input = prompt("enter name:");
// greet(input)

// const greet = (name, time = "day") =>{
//     console.log(`Hello ${time} ${name}!`)
// };

// const calArea = (r) => {
//     const pi = 3.14159;
//     if(isNaN(r) === false){
//         const area = pi * r **2;
//         alert(`The area of a circle with radius ${r} is ${area}`);
//         return area;
//     }
//     else{console.log('Invalid input')}
// }

// let r = prompt('enter a radius:');
// calArea(r);
// //----------------------------------------------------------------------------
// //neda example
// function calCircleArea(radius)
// {
//     if(isNaN(radius)){
//         alert("This is not a number");
//         //return undefined by default
//     }else{
//         const area = Math.PI * radius **2;
//         return area;
//     }
//     // if(isNaN(radius)){
//     //     alert("This is not a number");
//     //     return;
//     // const area = Math.PI * radius **2;
//     // return area;
//     // }
// }

// // let userValue = prompt("enter a number:");
// // //prompt always returns a string
// // let result = calCircleArea(userValue);
// // alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}`)

// const radiusPara = document.querySelector("#radius");
// const resultPara = document.querySelector("#result");
// function calCircleArea(radius)
// {
//     if(isNaN(radius)){
//         radiusPara.textContent += `: ${radius}`;
//         resultPara.textContent = "Error";
//         //return undefined by default
//     }else{
//         radiusPara.textContent += `: ${radius}`;
//         const area = Math.PI * radius **2;
//         resultPara.textContent = `The area is ${area.toFixed(2)}`
//         return area;
//     }
// }
// let userValue = prompt("enter a number:");
// //prompt always returns a string
// let result = calCircleArea(userValue);
// alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}`)



// const shoppingCart = document.querySelector("ul.shopping").textContent
// const shoppingList = (items) =>{
//     for item 
//     shoppingCart += item
// }

//-------------------------------------------------------
function populateList(shoppingList)
{
    //1.select and store a ref to the ul -> querySelector
    //2.loop through the shoppingList -> for loop
    //  3.create an li -> createElement
    //  4.append the li to the ul -> parent.appendChild(child)
    //  5.update the textContent of the li with array item.
    const ulList = document.querySelector("ul.shopping")
    for (let item of shoppingList)
    {
         //  3.create an li -> createElement
        const newLi = document.createElement("li");
         //  4.append the li to the ul -> parent.appendChild(child)
        ulList.appendChild(newLi);
         //  5.update the textContent of the li with array item.
        newLi.textContent = item;
    }
    
}
let myList = ['bread', 'cheese', 'green pepper'];
populateList(myList);