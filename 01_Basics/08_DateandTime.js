//Date object represents a single moment in time in a platform- independent format.

// let myDate = new Date()
// console.log(myDate.toString());//Sun Apr 28 2024 17:21:44 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Apr 28 2024
// console.log(myDate.toLocaleString());//4/28/2024, 5:21:44 PM
// console.log(typeof myDate);//object


// let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// let myCreatedDate2 = new Date (2023, 0, 23,5, 3 )
// console.log(myCreatedDate2.toLocaleDateString());//1/23/2023

// let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleDateString())//1/14/2023

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)//1714325341083

// console.log(Date.now()/1000);//1714325518.476
// console.log(Math.floor(Date.now()/1000));//1714325518

let newDate = new Date()
console.log(newDate);//2024-04-28T17:34:09.917Z
console.log(newDate.getMonth());//3
console.log(newDate.getDay());//0

//Most important method 
newDate. toLocaleDateString('dafault', {
    weekday: "long"
})