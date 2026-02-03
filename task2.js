//1. Welcome Program using prompt

let message=prompt("enter the username");
alert("Hi , Welcome to JavaScript Training")
console.log("Hi , Welcome to JavaScript Training");

//2. Console Methods Practice
console.log(500);
console.warn(500);
console.error(500);
console.clear();

//3. Data Type Identification
let a1="Hello";
console.log(a1, typeof(a1));
let b1=10;
console.log(b1, typeof(b1));
let c=true;
console.log(c, typeof(c));
let d;
console.log(d, typeof(d));
let e=null;
console.log(e, typeof(e));

//4. Arithmetic Operations
let a=20;
let b=5;

console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Multiplication:", a*b);
console.log("Division:", a/b);
console.log("Modulus:", a%b);
console.log("Exponent:", a**b); 


//5.Increment & Decrement
/*POST INCREMENT:
  1. x++ returns the old value of x.
  2. That old value is assigned back to x.
  3. Increment happens but is lost.
  4. Final value of x remains unchanged.*/
let x;
x=10;
x=x++;
console.log(x);//output is 10

/*POST DECREMENT:
  1. x-- returns the old value of x.
  2. That old value is assigned back to x.
  3. Decrement happens but is lost.
  4. Final value of x remains unchanged.*/
x=10;
x=x--;
console.log(x);//output is 10
/*PRE-INCREMENT:
  1. Value of x is incremented first.
  2. The new value is returned.
  3. The updated value is assigned to x.*/
x=10;
x=++x;
console.log(x);//output is 11

/*PRE-DECREMENT:
  1. Value of x is decremented first.
  2. The new value is returned.
  3. The updated value is assigned to x.*/
x=10;
x=--x;
console.log(x);//output is 9

//6. Assignment Operators
let num=10;
num +=5;              // num = num + 5: output=10+5=15
console.log(num);

num -=3;              // num = num - 3 : output=15-3=12
console.log(num);

num *=2;              // num = num * 2: output=12*2=24
console.log(num);

num /=4;              // num = num / 4: output=24/4=6
console.log(num);

num %=3;              // num = num % 3:output=6%3=0
console.log(num);

//7. Array Access
let arr=["HTML","CSS","Javascript","React"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length-1]);
console.log(arr);

//8. Modify Array
arr.push("Node") //Adding the element at the end .
arr.pop();//removing the last element. 
console.log(arr)//printing the uodated array.


//9.Student Object
let student={
    Name:"Venkatesh chowdhary",
    Age:22,
    Course:"computer science and engineering ",
    City:"Srikakulam"
}
console.log(student.Name);
console.log(student.Age)
console.log(student.Course)
console.log(student.City)

//10. Nested Object Practice
let company={
    companyName:"stackly",
    trainer:{
        trainerName:"Naveen",
        trainerSubject:"Javascript"
    }
}
console.log(company.companyName);
console.log(company.trainer.trainerName);
console.log(company.trainer.trainerSubject)