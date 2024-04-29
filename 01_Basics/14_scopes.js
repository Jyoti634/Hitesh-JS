// // let a = 10 
// // const b = 20 
// // var c = 30
// // console.log(a)//10
// // console.log(b)//20
// // console.log(c)//30


// function one(){
//     const userName = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(userName)
//     }
//     // console.log(website)
//     // two()//hitesh
// }
// one()// no output

// if(true){
//     const userName = "hitesh"
//     if(userName === "hitesh"){
//         const website = "youtube"
//         console.log( userName + website);
//     }
//     //console.log(website)// error it is scope based 
// }
// console.log(username)// can't access it because it's scope has been finished 
console.log(addOne(5))//6
function addOne(num){
    return num +1
}
addTwo(5)// error 
const addTwo = function (num){
    return num +2
}
