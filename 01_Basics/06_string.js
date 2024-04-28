//String we denote with both single quotes and double quotes
// Ex= "hello" = 'hello'
// dor concatenation of 2 string we use + operator . 
const name = "jyoti"
const repoCount = 50 
console.log(name + repoCount + " Value"); // jyoti50 Value(But this is the old way of doing the )
console.log(`Hello my name is ${name} and my repor is ${repoCount} `)// modern way , which String interpolation

const gameName = new String ('jyoti')
console.log(gameName[0]);//j
console.log(gameName.__proto__);//{}
console.log(gameName.length);//5
console.log(gameName.toUpperCase());//JYOTI
console.log(gameName.charAt(2));//o
console.log(gameName.indexOf('t'));//3
const newString = gameName.substring(0,4)

console.log(newString);//jyot
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);//jyot
const newStringOne = "   hitesh   "
console.log(newStringOne);//   hitesh

console.log(newStringOne.trim());//hitesh
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));//https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar'))//false
console.log(gameName.split('-'))//['jyoti']
