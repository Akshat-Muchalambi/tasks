// 1. What is the difference between var, let, and const?
// var - has function scope or global scope, you can redeclare it and change its value
// let - block scoped, can't redeclare but you can reassign new values
// const - also block scoped, can't redeclare or reassign. Once set, it stays the same

// 2. Which keyword allows redeclaration and why?
// var lets you redeclare because it has function scope. So you can declare the same 
// variable name multiple times in the same scope without errors

// 3. Which keyword allows reinitialization?
// Both var and let allow reinitialization -  can change their values 
// after declaring them

// 4. Which keyword does not allow redeclaration and reinitialization?
// const doesn't allow either. Once you assign a value to const, that's it - 
// you can't change it or declare it again

// 5. Why should const be used for fixed values?
// Using const for fixed values prevents accidental changes, makes code safer, 
// and clearly shows which values shouldn't change

// 6. What error occurs when redeclaring a let variable?
// SyntaxError: Identifier has already been declared

// 7. What error occurs when reassigning a const variable?
// TypeError: Assignment to constant variable

// 8. Which keyword is preferred in modern JavaScript and why?
// let and const are preferred nowadays because they have block scope which 
// helps avoid bugs. var can cause issues with hoisting and scope

// 9. Can const be declared without initialization? Explain.
// Nope, const needs a value right when you declare it. If you try to declare 
// it without a value, you'll get a SyntaxError

// 10. When should var be avoided?
// Avoid var when you need block scope, want to prevent redeclaration bugs, 
// or just want cleaner modern code

// 11. var redeclaration example:
var a = 10;
a = 20; // reassigning
var a = 30; // redeclaring 
console.log(a);
// Output: 30
// 12. let reinitialization:
let b = 5;
b = 15; // we can reassign let
console.log(b);
// Output: 15

// 13. let redeclaration error:
// let x = 10;
// let x = 20;  // this would throw an error
// SyntaxError: Identifier 'x' has already been declared

// 14. const reassignment error:
// const y = 50;
// y = 100;  // can't do this with const!
// TypeError: Assignment to constant variable

// 15. Program using var to show redeclaration:
var z = 70;
var z = 80; // var allows this
console.log('var redeclaration:', z);
// Output: var redeclaration: 80

// 16. Program using let to show reinitialization:
let c = 2;
c = 3; // this is fine
console.log(c);
// Output: 3

// 17. Program using const and explain why value cannot change:
const d = 0;
// d = 5;  //  TypeError: Assignment to constant variable
console.log(d);
// Output: 0
// const creates a read-only reference. Once you assign it, that's permanent

// 18. Convert var to let where applicable:
// Before: var age = 5;
// After:
let age = 5;
console.log('let:', age);

// 19. Convert var to const where applicable:
// Before: var city = 'Erode';
// After:
const city = 'Chennai';
console.log(city);

// 20. Your own example for var, let, and const:
var country = 'India';
let number1 = 3;
const pi = 3.14;

console.log('var:', country);
console.log('let:', number1);
console.log('const:', pi);
// Output:
// var: India
// let: 3

// const: 3.14