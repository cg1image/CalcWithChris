
function calcOne () {
    document.getElementById("calcField").textContent = 1;
}


/* Order of opertions:

 - Press 1, 1 should display in display field
 - Press +, 1 should be saved to a variable and the display field should 
 be empty
 - Press 2, 2 should display in display field
 - Press =, the math operation of 1 + 2 should be resolved, then
 displayed to the display field.


*/

document.getElementById("calcField").textContent = 5; // puts a value in field
let x = document.getElementById("calcField").textContent; // assigns value to variable
x = parseInt(x);
console.log(x);
console.log(typeof(x));