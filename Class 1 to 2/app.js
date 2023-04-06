// let userFavNum = prompt("what is your favourite number");
// console.log(+userFavNum + 5);
// Comparision Operators
// == , ===
//console.log(5 == "5");
//console.log(5 === "5");
// != , !== 5 = 5 (false), 5 = 6 (true)
//console.log(5 != 5);
//console.log(5 != 6);
// console.log(5 !== "5");
//console.log(5 !== "6");
// < , > , <= , >=
// let num1 = 5;
// let num2 = 6;
// console.log(num1 > num2);
// let num1 = 5;
// let num2 = 6;
// console.log(num1 < num2);
// let num1 = 9;
// let num2 = 7;
// console.log(num1 <= num2);
// let userAge = 12;
// let userAge2 = 25;
// console.log(userAge2 >= 18);

// if and else
// let userAge = +prompt("Enter your Age to check you are Eligible or Not for CNIC");
// if (userAge >=18) {
//     console.log("You are Eligible");
// }
// let userAge = +prompt("Enter your Age");
// if (userAge >= 18) {
//     console.log("You are Eligible");
// } else {
//     console.log("You are not Eligible");
// }
// let userFavNum = +prompt("Enter a number");
// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     console.log("You Won!");
// } else {
//     console.log("You Lose! " + computerNum);
// }
// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);

// if (computerNum % 2 === 0 && userInput === "even" ) {
//     console.log("You Won!" + computerNum);
// } else {
//     console.log("You Lose! " + computerNum);
// }
// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() *10);
// if (computerNum % 2 === 0 && userInput === "even") {
//     console.log("You Won!" + computerNum);
// } else if (computerNum % 2 !== 0 && userInput === "odd") {
//     console.log("You Won!" + computerNum);
// } else {
//      console.log("You Lose!" + computerNum);
//  }
// for (let i = 1; i <= 10; i++)
//intiliazation, Condition, Increment

// for (let i = 1; i <= 10; i++) {
//     console.log("Hello");
// }
// for (let i = 1; i <= 10; i++) {
//     document.write("Hello");
// }
// for (let i = 1; i <= 10; i++) {
//     document.write("Hello " + i);
// }
// for (let i = 1; i <= 10; i++) {
//     console.log("Hello " + i);
// }
// for (let i = 1; i <= 10; i++) {
//     console.log("2 X "+ i + " = " + 2*i);
// }
//Make variable for multiple tables
let table = 16;
for (let i = 1; i <= 10; i++) {
    console.log(table+" X "+ i + " = " + table*i);
}
