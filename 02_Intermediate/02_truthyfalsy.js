/*const userEmail = "h@gmail.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}
*/
//O/P= Got user email
//Because here we are taking h@gmail.com as a truthy value
/*
const userEmail2 = ""
if(userEmail2){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}
*/
//o/p= Don't have user email
//As it is an empty string so maan liya gaya he it is a falsy value so output come from else part
/*
The rule is - 
Falsy values - false , 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy Values - true, "0", 'false', " ", [], {}, function(){}
"0"- This is a String
'false'- this is also a string 

*/

//How to check an empty array?
/*
const userEmail = []
if(userEmail.length ===0){
    console.log("Array is empty")
}
//Array is empty
*/
// How to check an empty object ?
const emptyObj = {}
 if (Object.keys(emptyObj).length ===0 ){
console.log("Object is empty")
 }

 //o/p= Object is empty
 //Object.keys(emptyObj) this will return an array and as we know we can check using .legth to check it's length ,
 // it will obviously return 0 and we have to compare with 0 also . 
 //false ==0 returns true
 // false == '' returns true 
 //0 == '' returns true

 
