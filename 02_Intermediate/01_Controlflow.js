// const temperature =41
// if(temperature < 50){
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50") 
/*less than 50
temperature is greater than 50*/// The below statement run because there is no condition for this statement.
// const temperature =41
// if(temperature === 41){
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50")
/*less than 50
temperature is greater than 50 */ 

//to check more conditions we use else keyword . If the condition will be false then it will run else part 

// const temperature =41
// if(temperature === 41){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }
// console.log("execute")

/*less than 50
execute */
/*
const score =200;
if(score>100){
    const power ="fly"
    console.log(`user power: ${power}`)
}
*/
//O/P= user power: fly
/*
const score =200;
if(score>100){
 const power ="fly"
console.log(`user power: ${power}`)
}
console.log(`user power: ${power}`)// This line will through error because the power variable is only based on that scope . 
*/
//If you will use var here then problem will come , let's see how 
/*
const score =200;
if(score>100){
 var power ="fly"
console.log(`user power: ${power}`)
}
console.log(`user power: ${power}`)
*/
/*output- 
user power: fly
user power: fly
*/
/*
const score =200;
if(score>100){
 let power ="fly"
console.log(`user power: ${power}`)
}
console.log(`user power: ${power}`)
*/
//It will through error as let is scope based.
/* 
const balance =1000
if(balance >500) console.log("test"),console.log("test2")// This is inline conditional statement and must separate it using comma ,but don't recommeded to use it 

*/
/*
test
test2
*/

//We can use double && and double || operator also in conditional statement. 
/*
if(userLoggedIn && loggedInFromEmail && userSignup ){
    // code
}
*/
/*
if(userLoggedIn || loggedInFromEmail || userSignup ){
    // code
}
*/

//we use break in switch because if one case matches then the further cases it will not check and directly execute the code , except default 
