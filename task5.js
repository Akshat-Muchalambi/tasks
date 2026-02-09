// TASK 1 – Employee Merge System (Spread Operator)
// You have:
// let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
// let empPromotion = { role: "Developer", bonus: 10000 }
// Requirements:
// 1. Merge both objects using spread.
// 2. Update salary to 40000.
// 3. Add new property: experience: "2 years"
// 4. Print final employee object.

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };

// 1. Merge both objects using spread
let empFinal = { ...empBasic, ...empPromotion };

// 2. Update salary to 40000
empFinal.salary = 40000;

// 3. Add new property: experience: "2 years"
empFinal.experience = "2 years";

// 4. Print final employee object
console.log(empFinal);

// TASK 2 – Shopping Cart (Spread + Array)
// let cart1 = ["Shoes", "Shirt"]
// let cart2 = ["Watch", "Cap"]
// Requirements:
// 1. Merge both carts.
// 2. Add "Bag" at the end.
// 3. Add "Socks" at the beginning.
// 4. Print final cart.

let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];

// 1. Merge both carts
let finalCart = [...cart1, ...cart2];

// 2. Add "Bag" at the end
finalCart.push("Bag");

// 3. Add "Socks" at the beginning
finalCart.unshift("Socks");

// 4. Print final cart
console.log(finalCart);

// TASK 3 – Rest Operator Salary Calculator
// Create function:
// calculateTotalSalary(baseSalary, ...bonuses)
// Requirements:
// 1. Add all bonus values.
// 2. Return total salary.
// 3. Example:
// calculateTotalSalary(30000, 2000, 3000, 5000)
// Expected Output: Total Salary: 40000

function calculateTotalSalary(baseSalary, ...bonuses) {
  // 1. Add all bonus values
  let totalBonus = bonuses.reduce((sum, bonus) => sum + bonus, 0);

  // 2. Return total salary
  return baseSalary + totalBonus;
}

// 3. Example usage
let total = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", total);

// TASK 4 – Advanced Destructuring
// let student = {
// name: "Rahul",
// marks: { maths: 90, science: 85, english: 88 }
// }
// Requirements:
// 1. Destructure name.
// 2. Destructure maths and science.
// 3. Print:
// Rahul scored 90 in maths and 85 in science

let student = {
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
};

// 1 & 2. Destructure name, maths, and science
let {
  name,
  marks: { maths, science }
} = student;

// 3. Print the result
console.log(`${name} scored ${maths} in maths and ${science} in science`);

// TASK 5 – Array Manipulation
// let numbers = [10,20,30,40,50]
// Requirements:
// 1. Remove 30 using splice.
// 2. Add 25 in its place.
// 3. Reverse array.
// 4. Check if 50 exists.
// 5. Print final array.

let numbers = [10, 20, 30, 40, 50];

// 1 & 2. Remove 30 and add 25 in its place
let index = numbers.indexOf(30);
if (index !== -1) {
  numbers.splice(index, 1, 25);
}

// 3. Reverse the array
numbers.reverse();

// 4. Check if 50 exists
let exists = numbers.includes(50);

// 5. Print final array and check result
console.log("Final Array:", numbers);
console.log("Does 50 exist?", exists);

// TASK 6 – Flatten Data
// let apiData = [1,2,[3,4,[5,6,[7,8]]]]
// Requirements:
// 1. Convert into single array.
// 2. Print output.
// 3. Find index of 6.

let apiData = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// 1. Convert into single array
let flatData = apiData.flat(Infinity);

// 2. Print output
console.log("Flattened Array:", flatData);

// 3. Find index of 6
let indexOfSix = flatData.indexOf(6);
console.log("Index of 6:", indexOfSix);

// TASK 7 – Sorting Problem
// let prices = [100, 5, 25, 300, 45]
// Requirements:
// 1. Sort in ascending order properly.
// 2. Sort in descending order properly.
// (Note: Use compare function for correct sorting)

let prices = [100, 5, 25, 300, 45];

// 1. Sort in ascending order properly
prices.sort((a, b) => a - b);
console.log("Ascending Order:", prices);

// 2. Sort in descending order properly
prices.sort((a, b) => b - a);
console.log("Descending Order:", prices);
