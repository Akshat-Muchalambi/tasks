// part:1 logical and ternary operators

//Q1:-ans 
let num = 25;

if (num >= 10 && num <= 50) {
    console.log("Valid Number");
} else {
    console.log("Invalid Number");
}  

//Q2:-ans
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Q2:-ans
let num1 = 7;

let result = (num1 % 2 === 0) ? "Even" : "Odd";

console.log(result);

//Q3What is the output?
console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

//ans: The ans is true because for (10 ==="10") here it checks for both datatype and value. The diff here is datatype so it is false
//(5>2) it is true 
//!(3<1) is also true
// after applying operators it will be false || (true && true)
//(true && true) = true
//false || true = true 
//so final O/P is true

//part-2 type conversion
//Q5: Find the output and explain:
console.log("5" + 2); //ans=52 because 2 is converted to string 
console.log("5" - 2); //ans=3 beacuse string 5 is converted to number 5
console.log("5" * 2); //ans=10 beacuse 5 is converted to number
console.log("5" / 2); // ans=2.5 beacuse 5 is converted to number

//Q6: Q6: Convert the following using explicit conversion:
let value = "100";
// - Convert to Number

let numValue = Number(value);
console.log(typeof numValue);

// - Convert to Boolean

let boolValue = Boolean(value);
console.log(typeof boolValue);

//Q7: What will be the output?
console.log(Boolean("")); // ans=false (empty are falsy)
console.log(Boolean(" ")); // ans=true (space is not a empty)
console.log(Boolean(0)); // ans=false (0 is a false number  )
console.log(Boolean([])); // ans=true (because all obj are true in JS)
//Explain why.

// part 3 conditional statements 
//Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else
    let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal

let signal = "yellow";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight condition failed");
        }
    } else {
        console.log("Height condition failed");
    }
} else {
    console.log("Age condition failed");
}

//part4 loops
//Q11: Print numbers from 1 to 20 using for loop
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//Q12: Print only odd numbers from 1 to 20
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

//Q13: Using while loop:Print numbers from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

//Q14: Using do-while loop:Print numbers from 1 to 5.let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//Q15: Using for-of loop: Print each character from:
let word = "STACKLY";
for (let char of word) {
    console.log(char);
}

// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }
let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// real-time questions 
// RT-1 login system
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.

let username1 = "admin";
let password1 = "1234";

let result1 = (username1 === "admin" && password1 === "1234")
    ? "Login Success"
    : "Invalid Credentials";

console.log(result1);

// RT-2 Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible

let salary = 45000;
let experience = 2; // in years

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

//RT-3 Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.

let cartAmount = 3500;
let discount;

if (cartAmount >= 5000) {
  discount = "20% discount";
} else if (cartAmount >= 2000) {
  discount = "10% discount";
} else {
  discount = "No discount";
}

console.log(discount);

//RT-4 Even/Odd Counter
// Count how many even numbers between 1 to 50.

let evencount=0;
let oddcount=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
        evencount=evencount+1;
    }
    else{
        oddcount=oddcount+1;
    }
}
console.log(`The count of odd numbers between 1 to 50 is ${oddcount}`)
console.log(`The count of even numbers between 1 to 50 is ${evencount}`)

// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night
let hour=23;
if(hour>=1 && hour<=6){
    console.log("Good Morning")
}
else if(hour>=7 && hour<=12){
    console.log("Morning");
}
else if(hour>=13 && hour<=16){
    console.log("Good Afternoon");
}
else if(hour>=17 && hour<=19){
    console.log("Good Evening");
}
else{
    console.log("Good night");
    
}