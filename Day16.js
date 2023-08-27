// map(), reduce(), filter(),foreach(),evry(),some(),find(),findindex()

// define 1 array

// let prices = [34,56,67,90,40,78]

// let mrp = []

// for(let i=0; i<prices.length; i++){

//   let c1= prices[i]-1
// mrp.push(c1)

// }
// console.log(mrp)

// Use map function

// let rate = [45,56,89,90]
// // gives a new array [65,44,11,10]
// let q2=rate.map(function(el,index,arr){

//     return el - 100
// })

// console.log(q2)

// let numbers = [1,2,3,4,5,6,-7,-4,-3]

// let sum = 0
// let c1=numbers.map(function(el){

//    if(el>=0){
//     sum = sum + 0
//     return el + sum
//    } 

// })

// console.log(c1)

// In the given array filter out numbers which are greater than 60

// let cans = [45, 48, 89, 30,98, 99, 25, 67, 22]
//  let rans = []

// for(let i=0; i<cans.length; i++){

//  if(cans[i]> 60){
//     rans.push(cans[i])
//  }

// }
// console.log(rans)

// use map method to print new array

// let cal = [45,89,99,44]

// let c3=cal.map(function(el){

//     return el - 10
// })

// console.log(c3)

// let cal = [45,89,99,44]

// let c3=cal.filter(function(el){

//     return el > 80
// })

// console.log(c3)

//  use of accumlator and reduce() function method

// let tyre = [33,67,90,34]

// let c1=tyre.reduce(function(el,acc){

//     return acc+el
// },10)

// console.log(c1)

// foreach() method
// let Soviet = ['Russia','Belarus','Crimea','siberia']

// Soviet.forEach(function(el,index,arr){

//     console.log("USSR consist of 4 states, these are " +  el)

// })

// let transactions = [44,55,22,33,45,5,-8,-9,-6]

// let c1=transactions.filter(function(el,index,arr){

// return  el>0

// })

// console.log(c1)

// let c3=c1.reduce(function(acc,el){

//     return acc + el
// },0)
// console.log(c3)

// let transaction = [3,4,-5,8,9,-4,-5,2]

// let t2=transaction.find(function(el){

//    return el<0
// })

// console.log(t2)

// let transaction = [3,4,-5,8,9,-4,-5,2]

// let t2=transaction.findIndex(function(el){

//    return el<0
// })

// console.log(t2)

// let transaction = [3,4,-5,8,9,-4,-5,2]

// let t2=transaction.every(function(el){

//    return el>0
// })

// console.log(t2)

let transaction = [3,4,-5,8,9,-4,-5,2]

let t2=transaction.some(function(el){

   return el<0
})

console.log(t2)

// map() - array
// filter() - array 
// reduce() - value
// forEach() - undenfined
// find() - first occurence
// findIndex() - index value of first occurence
// every() - boolean
// some() - boolean()




