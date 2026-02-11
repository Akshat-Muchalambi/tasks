// SECTION 1 – Array Higher Order Methods Tasks


// Task 1 – forEach() Practice
// let subjects = ["Maths", "Science", "English", "History"]
// Requirements:
// * Use forEach()
// * Print Subject 1: Maths ... Subject 4: History
// * Store result in a variable
// * Question: Why does forEach() return undefined?

let subjects = ["Maths", "Science", "English", "History"];

let result = "";

subjects.forEach(function(subject, index) {
    result += `Subject ${index + 1}: ${subject}\n`;
});

console.log(result);

// Task 2 – map() Practice
// let prices = [100, 200, 300, 400]
// Requirements:
// * Use map()
// * Add 10% GST
// * Return new array
// * Expected Output: [110, 220, 330, 440]

let prices = [100, 200, 300, 400];

let newPrices = prices.map(function(price) {
    return price + (price * 0.10);
});

console.log(newPrices);

// Task 3 – filter() Practice
// let students = [
// { name: "A", marks: 45 },
// { name: "B", marks: 75 },
// { name: "C", marks: 35 },
// { name: "D", marks: 85 }
// ]
// Requirements:
// * Use filter()
// * Get students scoring above 50
// * Print filtered array

let students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
];

let passedStudents = students.filter(function(student) {
    return student.marks > 50;
});

console.log(passedStudents);

// Task 4 – find() Practice
// Use same students array
// Requirements:
// * Use find()
// * Find first student scoring above 50
// * Print that object
// * Question: Difference between filter() and find()?

let students1 = [
    { name: "A", marks: 45 },
    { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
];

let topStudent = students1.find(function(student) {
    return students1.marks > 50;
});

console.log(topStudent);

// Task 5 – reduce() Practice
// let cart = [
// { item: "Shirt", price: 1000 },
// { item: "Shoes", price: 2000 },
// { item: "Watch", price: 3000 }
// ]
// Requirements:
// * Use reduce()
// * Calculate total price
// * Bonus: Add 5% tax inside reduce()

let cart = [
    { item: "Shirt", price: 1000 },
    { item: "Shoes", price: 2000 },
    { item: "Watch", price: 3000 }
];

let total = cart.reduce(function(accumulator, currentItem) {
    return accumulator + currentItem.price;
}, 0);

console.log(total);

// Task 6 – some() Practice
// let numbers = [1, 3, 5, 7, 8]
// Requirement:
// * Check if at least one number is even
// * Output: true

let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log(hasEven);

// Task 7 – every() Practice
// let ages = [22, 25, 19, 30]
// Requirement:
// * Check if all ages are above 18

let ages = [22, 25, 19, 30];

let allAdults = ages.every(function(age) {
    return age > 18;
});

console.log(allAdults);

// Task 8 – sort() Practice
// let salaries = [50000, 10000, 70000, 30000]
// Requirements:
// * Sort ascending
// * Sort descending
// * Explain why normal sort() fails for numbers

let salaries = [50000, 10000, 70000, 30000];

// Sort ascending

let ascending = salaries.sort(function(a, b) {
    return a - b;
});

console.log(ascending);

// Sort descending

let descending = salaries.sort(function(a, b) {
    return b - a;
});

console.log(descending);

// Task 9 – Array Conversion Methods
// let arr = [10, 20, 30, 40]
// Requirements:
// * Convert using toString()
// * Convert using join("-")
// * Expected Output: 10-20-30-40

let arr = [10, 20, 30, 40];

// Convert using toString()
let str1 = arr.toString();
console.log(str1);

// Convert using join("-")
let str2 = arr.join("-");
console.log(str2);

// SECTION 2 – String Methods Tasks

// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Requirements:
// * Get character at index 4
// * Get ASCII value of character at index 4

let word = "Developer";

// Get character at index 4
let charAt4 = word.charAt(4);
console.log(charAt4);

// Get ASCII value of character at index 4
let charCodeAt4 = word.charCodeAt(4);
console.log(charCodeAt4);

// Task 11 – slice()
// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany";

// Extract: Company
let extracted = company.slice(7);
console.log(extracted);

// Task 12 – Case Conversion
// let userInput = "javaScript"
// * Convert to uppercase
// * Convert to lowercase

let userInput = "javaScript";

// Convert to uppercase
let upperCase = userInput.toUpperCase();
console.log(upperCase);

// Convert to lowercase
let lowerCase = userInput.toLowerCase();
console.log(lowerCase);

// Task 13 – trim()
// let email = " naveen@gmail.com "
// Remove unwanted spaces

let email = " naveen@gmail.com ";

// Remove unwanted spaces
let trimmedEmail = email.trim();
console.log(trimmedEmail);


// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exists

let message = "Welcome to JavaScript Training";

// Check if "JavaScript" exists
let hasJavaScript = message.includes("JavaScript");
console.log(hasJavaScript);

// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home";
let movieArray = movie.split("-");
console.log(movieArray);

// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// * Find first index of 'm'
// * Find last index of 'm'

let text = "programming";

// Find first index of 'm'
let firstIndex = text.indexOf('m');
console.log(firstIndex);

// Find last index of 'm'
let lastIndex = text.lastIndexOf('m');
console.log(lastIndex);

// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python";

// Replace python with javascript
let newTech = tech.replace("python", "javascript");
console.log(newTech);

// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// * Check if starts with "report"
// * Check if ends with ".pdf"

let filename = "report.pdf";

// Check if starts with "report"
let startsWithReport = filename.startsWith("report");
console.log(startsWithReport);

// Check if ends with ".pdf"
let endsWithPdf = filename.endsWith(".pdf");
console.log(endsWithPdf);

// Task 19 – repeat()
// let star = "*"
// Print 10 stars using repeat()

let star = "*";

// Print 10 stars using repeat()
let stars = star.repeat(10);
console.log(stars);

// FINAL TEAM CHALLENGE – Employee Report System
// let employees = [
// { name: "Naveen", salary: 50000 },
// { name: "Arun", salary: 30000 },
// { name: "Kiran", salary: 70000 }
// ]

// Requirements:
// * Convert names to uppercase using map()
// * Filter salary > 40000
// * Find first salary > 60000
// * Calculate total salary using reduce()
// * Sort salaries descending

let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
 ];

 // Convert names to uppercase using map()

 let upperCaseNames = employees.map(emp => {
    return { ...emp, name: emp.name.toUpperCase() };
});

console.log(upperCaseNames);

// Filter salary > 40000

let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);

// Find first salary > 60000

let firstHighSalary = employees.find(emp => emp.salary > 60000);
console.log(firstHighSalary);

// Calculate total salary using reduce()

let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(totalSalary);

// Sort salaries descending

let sortedSalaries = employees.sort((a, b) => b.salary - a.salary);
console.log(sortedSalaries);


