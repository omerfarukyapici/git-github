//JavaScript Problems and Challenges

// 1 -) Find the maximum number of the array
const functionOne = (a) => {

    return Math.max(...a);
}
const numberArray = [-344, -2, 100];
const maxNumber = functionOne(numberArray);
const maxNumberTwo = functionOne([-10, 0, 1]);
//console.log(maxNumber, " - ", maxNumberTwo);

// 2 -) Write a function that takes two numbers (a and b) as arguments, 
// If a is smaller than b, divide a by b 
// Otherwise, multiply both numbers
// Return the resulting value
const functionTwo = (a, b) => {
    let result;
    if (a < b) {
        result = a / b;
    } else {
        result = a * b;
    }
    return result;
    //return a < b  ? a / b : a * b;  <- Another way.
}
const ifAB = functionTwo(30, 20);
//console.log(ifAB);

// 3 -) Write a function that takes a value as argument
// Return the type of the value
const returnTypeOfArgument = (a) => {
    return typeof(a);
}
console.log(returnTypeOfArgument(1));