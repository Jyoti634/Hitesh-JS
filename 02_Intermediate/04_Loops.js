//Loops another name is iterators
//for Loop 
/*
for (let i = 0; i <10; i++){
    const element =i;
    console.log(element)
}
*/
//0 1 2 3 4 5 6 7 8 9
//10 didn't print because you checked upto 10 you have not given <=10
//console.log(element) // error as it is scope based 
/*
for (let i = 0; i <=10; i++){
    const element =i;
    if (element ==5){
        console.log("5 is the best number")
    }
    console.log(element)
}
*/
/*0
1
2
3
4
5 is the best number
5
6
7
8
9
10 */
//let's see loop inside loop
/*
for (let i = 0; i <10; i++) {
    console.log(`Outer loop value:   ${i}`)
    for (let j = 0; j < 10; j++) { 
        console.log(`Inner loop value ${j} and inner loop ${i}`)
    } 
}
*/
// in this once outer loop will run than inner loop will run 10 tims and then again one time outer loop will run 
//and again inner loop will run 10 times
/*
for (let i = 0; i <10; i++) {
    console.log(`Outer loop value:   ${i}`)
    for (let j = 0; j < 10; j++) { 
        console.log(i + '*' + j + '=' + i*j)
    } 
}
*/
/*
let myArray = ["flash", "spiderman" , "superman"]
console.log(myArray.length);//3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}
/*
flash
spiderman
superman*/
// we don't write <= myArray.length because array starts from 0 , if you will do <= myArray.length
// you will get output as undefined in the last position



//break and continue 
//suppose you want to break a loop from a particular point that time we use break 
/*
for (let i = 1; i <= 20; i++) {
  if(i ==5){
    console.log(`Detected 5`)
    break
  }
  console.log(`Value of i is ${i}`); 
}
*/
/*Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5w */
//continue : it is something like game me kuch mistake ho gaya and then you are continuing it .
//the condition which matches one time that we avoid and rest we execute in continue 

for (let i = 1; i <= 5; i++) {
    if(i == 2){
      console.log(`Detected 2`)
      continue
    }
    console.log(`Value of i is ${i}`); 
  }
  /*Value of i is 1
Detected 2
Value of i is 3
Value of i is 4
Value of i is 5 */