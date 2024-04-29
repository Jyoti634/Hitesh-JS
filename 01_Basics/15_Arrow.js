// const user ={
//     username:"hitesh",
//     price: 999,
//     welcomeMessage : function(){
// console.log(`${this.username} , welcome to website`)

//     }
// }

// user.welcomeMessage()//hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage()//sam , welcome to website



// const user ={
//     username:"hitesh",
//     price: 999,
//     welcomeMessage : function(){
//     console.log(`${this.username} , welcome to website`)
//     console.log(this)
//     }
// }

// user.welcomeMessage()/**
//  hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
//  */
// user.username = "sam" //sam , welcome to website
// user.welcomeMessage()/*{
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   } */


// const user ={
//     username:"hitesh",
//     price: 999,
//      welcomeMessage : function(){
//      console.log(`${this.username} , welcome to website`)
//     console.log(this)
//         }
//     }
    
//     console.log(this)// {} because we are in node environment, due to which this refers to an empty object


// function chai(){
//     console.log(this)
// }
// chai()


//Output will be =
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  crypto: [Getter]
} */



// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()// undefined . this is because this can't be accessed inside a function 



// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()//undefined


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
//     console.log(this)
// }
// chai()//undefined

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()// {}

 
// const addTwo = (num1 , num2) => {
//     return num1 +num2
// }
// console.log(addTwo(3,4))//7

// const addTwo = (num1 , num2) =>  num1 +num2
// console.log(addTwo(3,4))//7

// const addTwo = (num1 , num2) =>  (num1 +num2)
// console.log(addTwo(3,4))//7

const addTwo = (num1 , num2) =>  ({username: "hitesh"})
console.log(addTwo(3,4))//{ username: 'hitesh' }