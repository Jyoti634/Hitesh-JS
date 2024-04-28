
// const mySym = Symbol("key1")
// const JsUser = {
// name : "Hitesh",
// "fullName" : "Hitesh Choudhary",
// [mySym] : "myKey1",
// age : 18,
// location : "Jaipur",
// email : "hitesh@google.com",
// isLoggedIn : false,
// lastLoginDays : ["Monday", "Saturday"]
// }


// // console.log(JsUser.email);// hitesh@google.com// In this way you can access it 
// // console.log(JsUser["email"])//hitesh@google.com//in this way also you can access it 
// // //but 
// // //console.log(JsUser."fullName")- in this way you can't access it as it will through errors
// // console.log(JsUser.fullName)//Hitesh Choudhary
// // console.log(JsUser["fullName"])//Hitesh Choudhary

// // console.log(JsUser[mySym])//myKey1

// JsUser.greeting = function(){
//     console.log("Hello Js user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User, ${this.name}`)
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo);

// const tinderUser = new Object()// this is a single ton object
// console.log(tinderUser);//{}


// const tinderUser2 = {} // this is a non singleton object 
// console.log(tinderUser2);//{}
// tinderUser2.id = "123abc"
// tinderUser2.name = "sammy"
// tinderUser2.isLoggedIn= false
// console.log(tinderUser2)//{ id: '123abc', name: 'sammy', isLoggedIn: false }

// const regularUser = {
//     email : "somerandom@gmail.com",
//     fullName : "jyotipuspa",
//     userFullName : {
//         firstName : "hitesh",
//         lastName : "choudhary"
//     }
// }
// console.log(regularUser.fullName)//jyotipuspa
// console.log(regularUser.userFullName)//{ firstName: 'hitesh', lastName: 'choudhary' }
// console.log(regularUser.userFullName.firstName)//hitesh(This is called as nexted chaining through which you can access element inside elements of an object )


// const obj1 = {1 : "a" , 2: "b"}
// const obj2 = {3 : "a", 4: "b"}
// const obj4 = {5 : "a", 6: "b"}
// // //const obj3 = {obj1 , obj2 }
// // //console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// // const obj5 = Object.assign ({}, obj1, obj2, obj4)
// // //console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// // console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const users = [
//     {
//     id : 1,
//     email : "h1@gmail.com"
//     },
//     {
//         id : 1,
//         email : "h2@gmail.com"
//     },
//     {
//         id : 1,
//         email : "h3@gmail.com"
//     }
// ]
// console.log(users[1].email)// h2@gmail.com

// const tinderUser2 = {} // this is a non singleton object 
// tinderUser2.id = "123abc"
// tinderUser2.name = "sammy"
// tinderUser2.isLoggedIn= false
// // console.log(tinderUser2);//{ id: '123abc', name: 'sammy', isLoggedIn: false }
// // console.log(Object.keys(tinderUser2))//[ 'id', 'name', 'isLoggedIn' ]
// // console.log(Object.values(tinderUser2));//[ '123abc', 'sammy', false ]
// // console.log(Object.entries(tinderUser2));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser2.hasOwnProperty('isLoggedIn'))//true
// console.log(tinderUser2.hasOwnProperty('isLogged'))//false

//*****Destructuring of Object (We will see array destructuring in some other day )*****


const course ={
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor} = course
const {courseInstructor : instructor} = course

console.log(courseInstructor)//hitesh
console.log(instructor)//hitesh
