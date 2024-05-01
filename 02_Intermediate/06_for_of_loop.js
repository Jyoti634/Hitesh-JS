//Some special loops are available except for , while , and do while loops
//for of - this is a array specific loop. Inside array we can add objects , strings also. 
/*
const arr= [1,2,3,4,5]
for (const num of arr){
  console.log(num)
}
*/
//const num of arr meaning = const num is a variable which takes the value of arr.
/*o/p= 1
2
3
4
5
*/
/*
const greetings = "Hello world!"
for (const greet of greetings){
  console.log(`Each char is ${greet}`)
}

o/p=> Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

//Maps = The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// It is mostly changes each element with little instruction in it
//It provides uniques values 
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")
console.log(map)
*/
//o/p=> Map(3) { 'IN' => 'INDIA', 'US' => 'United States', 'FR' => 'France' }
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")
console.log(map)
*/
//o/p=> Map(3) { 'IN' => 'India', 'US' => 'United States', 'FR' => 'France' }
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "INDIA")
console.log(map)
*/
//o/p=> Map(3) { 'IN' => 'INDIA', 'US' => 'United States', 'FR' => 'France' }

///Let's use loop in map
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")

for (const key of map){
  console.log(key)
}
*/
/* o/p=>
[ 'IN', 'INDIA' ]
[ 'US', 'United States' ]
[ 'FR', 'France' ]
*/
//But we don't wantes to print in this way , we wanted to print key and value separately. Let's see what we will do dor this ? 
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")

for (const [key, value] of map){
  console.log(key, ':-', value)
}
*/
/*
IN :- INDIA
US :- United States
FR :- France
*/
//Let's use for of loop in object 
/*
const myObject ={
  game1 : 'NFS',
  game2 : 'Spiderman'
}
for (const [key , value] of myObject){
  console.log(key, ':-', value)
}
*/
//Error- myObject is not iterable
/*
So this syntax doesn't work for objects, not let's see how we can use it. 
for (const [key , value] of myObject){
  console.log(key, ':-', value)
}
*/
//For in loop let's use in object . It is mostly used in objects

/*
const myObject = {
  js : "javascript",
  cpp: "C++",
  rb : "ruby",
  swift : "swift by apple"
}

for (const key in myObject){
  console.log(myObject[key])
}
*/
/*
javascript
C++
ruby
swift by apple
*/
/*
const myObject = {
  js : "javascript",
  cpp: "C++",
  rb : "ruby",
  swift : "swift by apple"
}

for (const key in myObject){
  console.log(`${key} shortcut is for ${myObject[key]}`)
}
*/
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

//for in loop in arrays 
/*
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming){
  console.log(key);
}
*/
/*o/p=>
0
1
2
3
4
*/
/*
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map){
  console.log(key);
}
*/
// No output because map is not iteratable , so as it is not iteratable we can't use this in documentation . 

// For each loop => Higher order function 
//Call back function has no name
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val) {
     console.log(val)
})
*/
/*js
ruby
java
python
cpp */
//Same program in arrow function
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( (val)=> {
     console.log(val)
})
*/
/*
js
ruby
java
python
cpp
*/
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
function printMe(item){
  console.log(item)
}
coding.forEach(printMe)
*/
/*
js
ruby
java
python
cpp
*/
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach((item, index, arr)=>{
 console.log(item, index, arr);
})
*/
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
/*
const myCoding = [
  {
    languageName: "javascript",
    languageFileName : "js"
  },
  {
    languageName: "java",
    languageFileName : "java"
  },
  {
    languageName: "Python",
    languageFileName : "py"
  }
]
myCoding.forEach((item) =>{
  console.log(item.languageName);
})
*/
/*
javascript
java
Python
*/
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item)=>{
 console.log(item);
})
console.log(values)
/*
/*
js
ruby
java
python
cpp
undefined*/
/*
const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item)=>{
 return item;
})
console.log(values)
*//*
js
ruby
java
python
cpp
undefined
*/
//for each doesnot return anything , so how can you achieve thing , let see in another file 