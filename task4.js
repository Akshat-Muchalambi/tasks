// Concept Questions:

// 1. Difference between function declaration & expression?

// Answer:
// Declaration → Hoisted, can call before definition

// Expression → Not hoisted, cannot call before definition

// 2. What is higher order function?

//Answer:
// A function that accepts another function as argument OR returns a function
// Example: map(), filter(), setTimeout()

// 3. Real-time example of generator?

// Answer:
// Order ID generator
// Pagination system
// Infinite scroll
// Coupon system

// 4. Why do we use IIFE? 

// Answer:
// Data privacy
// Encapsulation
// Avoid global pollution
// Secure variables

// 5. Difference between var, let, const?

// Answer:

// Feature	   var	    let	      const
// Scope	  Function	Block	  Block
// Hoisting	  Yes	    TDZ	       TDZ
// Reassign	  Yes	    Yes	       No
// Redeclare  Yes	    No	       No

// SECTION 1 – Real-Time Function Logic
// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary, bonusPercentage) {
  // Calculate bonus
  let bonus = (basicSalary * bonusPercentage) / 100;

  // Total salary before tax
  let grossSalary = basicSalary + bonus;

  // Calculate tax (5%)
  let tax = grossSalary * 0.05;

  // Final salary after tax
  let finalSalary = grossSalary - tax;

  // Print salary breakdown
  console.log("Salary Breakdown:");
  console.log("Basic Salary:", basicSalary);
  console.log("Bonus (" + bonusPercentage + "%):", bonus);
  console.log("Gross Salary:", grossSalary);
  console.log("Tax (5%):", tax);
  console.log("Final Salary:", finalSalary);

  // Return final salary
  return finalSalary;
}

calculateSalary(45000,34);

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, marksArray) {
  // Calculate total
  let total = 0;
  for (let mark of marksArray) {
    total += mark;
  }

  // Calculate average
  let average = total / marksArray.length;

  // Decide grade
  let grade;
  if (average >= 75) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  // Return result object
  return {
    name: name,
    total: total,
    average: average,
    grade: grade
  };
}

let result = generateResult("pravin", [58, 95, 49, 50, 84]);
console.log(result);

// SECTION 2 – Scope & Hoisting (Debugging)
// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }
// Questions:
// - What will happen?
//ans:-10 (reference error for b because it is block scope)
// - Why?
//var a is function scope so it is accesible outise the block but let b is block scope cannot be access outside the block so it will give reference error for b 
// - Fix it properly.
function demo(){
    let b;
    if(true){
        var a = 10;
        b = 20;
    }
    console.log(a);
    console.log(b);
}

// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

//ans: undefined for x because of hoisitng and referce error for y because it is in TDZ( temporal dead zone) because of let declaration

// SECTION 3 – Callback & Higher Order (Industry Simulation)
// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

//  step 1 create processOrder function
function processOrder(orderId, callback){
    console.log("order processed:", orderId);
    callback(orderId);
}

// step 2 create generateInvoice function
function generateInvoice(orderId){
    console.log("invoice Generated for order:", orderId);
}

// step 3 call processorder function with orderId and callback
processOrder(100, generateInvoice);

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

// step 1 create transaction function(HOF)

function transaction(amount, type, callback) {
  let balance = 1000; // initial balance

  if (type === "deposit") {
    balance += amount;
    console.log("Amount Deposited:", amount);
  } else if (type === "withdraw") {
    balance -= amount;
    console.log("Amount Withdrawn:", amount);
  } else {
    console.log("Invalid Transaction Type");
    return;
  }

  console.log("Current Balance:", balance);

  // call callback
  callback(balance);
}

//step 2 create sendSMS function
function sendSMS(balance){
    console.log("SMS sent: Your updated balance is", balance);
}

// step 3 call transaction function with amount, type and callback
transaction(365, "deposit", sendSMS);
transaction(123, "withdraw", sendSMS);

// SECTION 4 – Currying (E-Commerce)
// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice) {
  return function (discount) {
    return function (tax) {
      // calculate discount amount
      let discountAmount = (basePrice * discount) / 100;
      let priceAfterDiscount = basePrice - discountAmount;

      // calculate tax
      let taxAmount = (priceAfterDiscount * tax) / 100;
      let finalPrice = priceAfterDiscount + taxAmount;

      return finalPrice;
    };
  };
}

// SECTION 5 – IIFE (Security + Encapsulation)
// 8. Secure Company Module:
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

const CompanyModule = (function () {
  // private variable
  let companyCode = "COMP-IND-2026";

  // private helper (optional)
  function getStatus() {
    return "Active";
  }

  return {
    // public method
    getCompanyStatus: function () {
      return {
        status: getStatus(),
        codeLength: companyCode.length // using private variable safely
      };
    }
  };
})();

console.log(CompanyModule.getCompanyStatus());

// SECTION 6 – Generator (Advanced Logic)
// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function* orderIdGenerator() {
  let id = 1001;

  while (true) {
    yield `ORD${id}`;
    id++;
  }
}
const generateOrderId = orderIdGenerator();

console.log(generateOrderId.next().value);
console.log(generateOrderId.next().value);
console.log(generateOrderId.next().value);

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins

function* couponSpin(){
      const coupons = ["10% OFF", "20% OFF", "50% OFF", "No Luck", "Jackpot"];
  let index = 0;

  while (true) {
    yield coupons[index % coupons.length];
    index++;
  }
}
const spinCoupon = couponSpin();
console.log(spinCoupon.next().value);
console.log(spinCoupon.next().value);
console.log(spinCoupon.next().value);
console.log(spinCoupon.next().value);
console.log(spinCoupon.next().value);
console.log(spinCoupon.next().value);

// SECTION 7 – Mini Project (Integrated)
// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

//1. hide config using IIFE
const AppConfig = (function () {
  const TAX_PERCENT = 18; // private
  const STORE_NAME = "Stackly Store";

  return {
    getTax: () => TAX_PERCENT,
    getStoreName: () => STORE_NAME
  };
})();

//2. cart system
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  console.log(`${product} added to cart - ₹${price}`);
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

//3. apply discount using currying 
const applyDiscount = total => discount => {
  const discountAmount = (total * discount) / 100;
  return total - discountAmount;
};
applyDiscount(2000)(10);

// 4. generate coupon using generator 
function* generateCoupon() {
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "NO LUCK";
  yield "JACKPOT";
}


// 5. process payment using callback
function processPayment(amount, callback) {
  console.log("Processing payment of ₹", amount);

  setTimeout(() => {
    console.log("Payment Successful ✅");
    callback(amount);
  }, 1000);
}
function sendConfirmation(amount) {
  console.log(`SMS: Payment of ₹${amount} confirmed.`);
}

// Simulate flow

// Add items

addToCart("Laptop", 50000);
addToCart("Mouse", 1000);

// Calculate total

let total = calculateTotal();
console.log("Cart Total:", total);

// Apply discount

let discountedTotal = applyDiscount(total)(10);
console.log("After Discount:", discountedTotal);

// Add tax (from IIFE config)

let taxAmount = (discountedTotal * AppConfig.getTax()) / 100;
let finalAmount = discountedTotal + taxAmount;

console.log("Final Amount (with tax):", finalAmount);

// Generate coupon

const coupon = generateCoupon();
console.log("Coupon Applied:", coupon.next().value);

// Process payment

processPayment(finalAmount, sendConfirmation);


