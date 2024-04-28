console.log("2">1);//true because 2 is greater than 1 
console.log("02">1);// true because 2 is greater than 1 
console.log(null>0);//false because null is falsy value which is nothing  , SO nothing > 0 which is false 
console.log(null==0);//false because null means nothing , so nothing == 0 which is false . 
console.log(null>=0);//true nothing is atleast as much as having one
console.log(undefined ==0);//false because which is not defined can't be 0
console.log(undefined>0);//false because which is not defined can't be > 0
console.log(undefined<0);//false because which is not defined can't be < 0

//=== this operator  checks the type as well as value 
console.log("2" === 2);//false because "2" is a string where 2 is a numeric they both are not same 
