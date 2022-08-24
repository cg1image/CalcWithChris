/* 
When you call a function, code between curly braces (code block) 
is executed. 



*/


// let input1 = prompt();
// let input2 = prompt();



let a = 5;

const si = () => {
    a = a + 1;
}

console.log(a); // a = 5
si(); // a = 6
console.log(a); // a = 6;
si();
console.log(a);







/*
sumFunc(num1 = 1, num2 = 2){
    3 = 1 + 2;
    num1 = 2;
    num2 = 1;
    return 3
}




*/





























function calcOne () {
    document.getElementById("calcField").textContent = 1;
    let one = document.getElementById("calcField").textContent;
    one = parseInt(one);
    
}


function calcTwo () {
    document.getElementById("calcField").textContent = 2;
    let two = document.getElementById("calcField").textContent;
    two = parseInt(two);
    
}


function calcPlus () {
    let x = document.getElementById("calcField").textContent;
    document.getElementById("calcField").textContent = "";
    calcEqual(x);
    

}




function calcEqual () {
  
}

function calcErase () {
    document.getElementById("calcField").textContent = "";
}






/* Order of opertions:

 - Press 1, 1 should display in display field
 - Press +, 1 should be saved to a variable and the display field should 
 be empty
 - Press 2, 2 should display in display field
 - Press =, the math operation of 1 + 2 should be resolved, then
 displayed to the display field.

document.getElementById("calcField").textContent = 5; // puts a value in field
let x = document.getElementById("calcField").textContent; // assigns value to variable
x = parseInt(x);
console.log(x);
console.log(typeof(x));
*/