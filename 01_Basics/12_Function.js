// // function sayMyName(){
// // console.log("H");
// // console.log("I");
// // console.log("T");
// // console.log("E");
// // console.log("S");
// // console.log("H");
// // }

// // sayMyName();

// // function addTwoNumbers(number1,number2){
// //      console.log(number1 + number2); 
// // }
// // addTwoNumbers(); //NAN - 
// // addTwoNumbers(3,4);//7
// // addTwoNumbers(3, "4")//34
// // addTwoNumbers(3, "a")//3a
// // addTwoNumbers(3, null)//3
// // const result = addTwoNumbers(3,5)// 8
// // console.log(result)//undefinded (because you written console , 
// //console print karna matlab ye nhi that function is returning, return is another concept and console means print in console. 
// //Let's see , how we can write it same   )
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2 ;
//     console.log("Jyoti") //Jyoti ( this will print because this is above return statement )
//     return result

//     //console.log("Jyoti")- (This line will never print because in function  there is a rule 
//     //that if you have returned after that no line will execute in that function )
//     //You can also write it as directly (return number1 + number2)
// }
// const result = addTwoNumbers(3,5)
// console.log("Result: " , result);// Result : 8 


// function loginUserMessage(username){
//     return `${username} just logged in `
// }
// // loginUserMessage("hitesh")// nothing returns 
// // console.log(loginUserMessage("hitesh"))//hitesh just logged in 
// console.log(loginUserMessage())// undefined just logged in 



// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a user name ");
         
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage())//Please enter a user name 
//undefined just logged in

//If you don't want to print //  return `${username} just logged in `  //this line than write like this 
// /*function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a user name ");
  //       return // use return statement here so that below return will not execute
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage())*/
/* the output will be 
Please enter a user name 
undefined */


//(username === undefined) = (!username)

// function loginUserMessage(username){
//     if(!username ){
//         console.log("Please enter a user name ");
//        return  
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage())//Please enter a user name 
// //undefined
// Default value also we ca give if the user is not giving any value during the function call 

    // function loginUserMessage(username = "sam "){
    //     if(!username ){
    //         console.log("Please enter a user name ");
    //        return
    //     }
    //     return `${username} just logged in `
    // }
    // console.log(loginUserMessage())//sam  just logged in  
    // If you pass some value in the function call and also provide the the parameters with default value like aboce , than the arguments will overide it . 
    function loginUserMessage(username = "sam "){
        if(!username ){
            console.log("Please enter a user name ");
           return
        }
        return `${username} just logged in `
    }
    console.log(loginUserMessage("hitesh"))//hitesh just logged in
    

