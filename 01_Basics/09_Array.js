/* array is an object , Array is resizable , mix of data , To access any value we have to follow [0], Zero indexed, Shalow copies ,  */
const myArr = [0,1,2,3,4,5]
// const myHeros = ["shaktiman", "nagraj", "haatim"]
// const myArr2 = new Array (1,2,3,4)
// console.log(myArr[1]);//1


// //Array Methods 
// myArr.push(6)
// console.log(myArr)//[0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)
// console.log(myArr)//[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()
// console.log(myArr)//[0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9)
// console.log(myArr)//[9, 0, 1, 2, 3, 4, 5, 6]
// myArr.shift()
// console.log(myArr)//[ 0, 1, 2, 3, 4, 5, 6]

// console.log(myArr.includes(9))//false
// console.log(myArr.indexOf(3))//3
// console.log(myArr)//[ 0, 1, 2, 3, 4, 5]

// const newArr = myArr.join()// to convert all value in to string  we use join ()
// console.log(myArr)//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr)//0,1,2,3,4,5



//slice , splice



console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)
console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr)//B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)//C  [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]