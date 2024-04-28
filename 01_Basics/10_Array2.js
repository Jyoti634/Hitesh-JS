// Array more methods 
// const marvelHeros= ['thor', 'ironman', 'spiderman']
// const dc_heros = ["superman", "flash", "batman"]
// marvelHeros.push(dc_heros)
// console.log(marvelHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeros[3][1])//flash - it is not a good method of combine 2 arrays 
// marvelHeros.concat(dc_heros)
// console.log(marvelHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// //[ 'thor', 'ironman', 'spiderman']
// const allHeros = marvelHeros.concat(dc_heros)
// console.log(allHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// kanch glass spread 
// const all_new_heros = [...marvelHeros, ...dc_heros]// spread operator...
// console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//flat 
// const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
//to convert any type of data in to array we use Array.from()
// console.log(Array.isArray("Jyoti"))//false- it checks the passed value is an array or not 
// console.log(Array.from("Jyoti"))//[ 'J', 'y', 'o', 't', 'i' ]


// console.loh(Array.from({name: "hitesh"}))//interesting it provides empty array [] 
// //As you have not given proper value provides Key and value pair ,
// // you have to mention wheather you want all key array or value array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//.of provides the array value 
//[ 100, 200, 300 ]

