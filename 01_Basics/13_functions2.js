/* Shopping cart functions where you don't know how many arguments will user pass ,
 and how many parameter for that you have to pass */

//  function calculateCartPrice(...num1){
//     return num1
//  }
//  console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ]
//  function calculateCartPrice(...num1){
//     return num1
//  }
//  console.log(calculateCartPrice(200,400,500, 600, 700, 8000))//[ 200, 400, 500, 600, 700, 8000 ]

//  function calculateCartPrice(val1, val2, ...num1){
//     return num1
//  }
//  console.log(calculateCartPrice(200,400,500, 600))//[500, 600]


// const user = {
//     username : "hitesh",
//     price : 199
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`)
// }
// handleObject(user)//Username is hitesh  and price is 199

// in this we check the price which we are extracting in the function console log , that is actually available or not ? 
// the value / arguments which you are passing in the function the data type of that argument is object or not ? 
// if you will write prices int he object the output will come like "Username is hitesh  and price is undefined"
// You can pass object in the below way also . 



// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`)
// }
// handleObject({
//         username : "hitesh",
//         price : 199
// })
//the output will be same "Username is hitesh  and price is 199"
// you can also pass object as an array also 



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))//400
//the output will be 400

// If you want to pass array either you can put it in variable and pass it or you can directly pass it . Let see 

console.log(returnSecondValue([200, 400, 500, 1000]))// this also provide output 400


