/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.filter((num) => num > 4)
console.log(newNums)
*/
//o/p=> [ 5, 6, 7, 8, 9, 10 ]
//problems using filter()
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.filter((num) => {
    return num > 4// as you have written {} , that means it is a scope now , so we have to use return keyword
//if you opens scope then use return , if don't want to use scope the write it like previous code
})
console.log(newNums)
*/
//[ 5, 6, 7, 8, 9, 10 ]

//let's see now how to achieve the same using for each loop
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []
myNums.forEach((num) => {
    if(num >4){
        newNums.push(num)
    }
})
console.log(newNums)
*/
//[ 5, 6, 7, 8, 9, 10 ]

//map()
/*
const myNums = [1,2,3,4,5,6,7,8]
const newNums = myNums.map((num ) => num + 10)
console.log(newNums)
*/

/*[
  11, 12, 13, 14,
  15, 16, 17, 18
] */

//Here also same things apply what we have seen in filter , if you will open scope you have to use return 
/*
const myNums = [1,2,3,4,5,6,7,8]
const newNums = myNums.map((num ) => {num + 10})
console.log(newNums)
*/
/*
[
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined
  ]
  *//*
  const myNums = [1,2,3,4,5,6,7,8]
  const newNums = myNums.map((num ) => {
    return num + 10
})
  console.log(newNums)
*//*
  [
    11, 12, 13, 14,
    15, 16, 17, 18
  ]
  */

  //Chaining- 1st chain result pass to 2nd chain
/*
  const myNums = [1,2,3,4,5,6,7,8]
 
 const newNums = myNums
        .map((num)=> num *10)
        .map((num)=> num +1)
        .filter((num) => num >=40)
  console.log(newNums)
*/
  //[ 41, 51, 61, 71, 81 ]
  //reduce() method
  /*
  const myNums = [1,2,3]
  const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+ currval
  }, 0)
  console.log(myTotal)
  */
  /*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/
//You can write this in same arrow function
/*
const myNums = [1,2,3] 
const myTotal = myNums.reduce((acc, curr) => acc+ curr, 0)
console.log(myTotal);
*/
//6

