//Nullish Coalescing Operator (??) : null undefined

// It is mostly takes the first value but if it is null or undefined it takes 2nd value but 
// it is mostly used as 1st value as null or undefined and 2nd values as complex function ,
// so that it can easily run the function

let val1;
//val1 = 5 ?? 10 
//console.log(val1)//5
// val1 = null ?? 10
// console.log(val1)//10
val1 = undefined ?? 15
console.log(val1)//15

//Ternary operator (?:)
//condition  ? true : false
const iceTeaPrice =100;
iceTeaPrice >=80 ? console.log("Less than 80") : console.log("More than 80")
//less than 80 
//!== operator is used for strict inequality comparison. It checks whether two values are not equal to each other,
// while also ensuring that they are not of different types.