// const score = 400; 
// console.log(score);//400

// const balance = new Number (100)
// console.log(balance);//[Number : 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));//124
// const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));//1,00,000

//********************MATHS*********************************


console.log(Math);// Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,3,6,8));//3
console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,6,8));//8
console.log(Math.random());//0.6056133083877906
console.log((Math.random()*10 ) + 1);//10.749177232947016
console.log((Math.random()*10 ) + 1);//10.631223176007932


const min = 10
const max = 20
console.log(Math.floor(Math.random () * (max - min +1) ) + min);//15
/* random gives a value between 0 and 1  . So values humesha 0.1 0.2 etc ho sakta he.
ab problem kya hota he when you multiply with 10, values you have shifted to left 
but kabhi kabhi value ata he 0.1. So Math.floor jo he , it will give you value as 0
To avoid this issue I have added 1 . As our minimum requirement is 1 se greater than .

Some times case comes like both min and max you have to define and to get the value 
we have to do Max - min +1 to avoid 0 , And we addeded min value in that . 
*/
