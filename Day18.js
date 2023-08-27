


let tn = [-11,22,33,-55,66,-88,-99]
let q1 = tn.filter(function(el){
    return el > 0
}).reduce(function(acc,el){
    return acc + el
},0)
console.log(q1)


let q2 = tn.filter(function(el){
    return el < 0
}).reduce(function(acc,el){
    return acc + el
},0)
console.log(q2)


// program 2
//             0         1        2   3
let info = ["chinmay","deshpande",34,50]

let obj = {
    // prop(key):value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56
}

//console.log(obj[0])
// Object does not store the value by index

// let infoB = ["poorva","vyas",29, "ujjain"]
// // retrive 
// console.log(infoB[0])
// // update
// infoB[0] = "mayuri"
// console.log(infoB)
// // add 
// infoB.push("hindi")
// infoB.unshift("Er")
// delete
// infoB.pop()
// infoB.shift()



// let infoC = {
//     firstName:"poorva",
//     lastName:"vyas",
//     city:"ujjain",
//     language:"hindi",
//     age:29
// }

// dot notation and bracket notation

// retrive  (.notation and bracket notation)

// console.log(infoC.firstName)
// console.log(infoC['firstName'])

// // update  (.notation and bracket notation)

// infoC.firstName = "mayuri"
// infoC['firstName'] = "komal"
// console.log(infoC)

// add (.notation and bracket notation)

// infoC.skills = "coding"
// infoC['pincode'] = 411028
// console.log(infoC)

// // delete (.notation and bracket notation)
// delete infoC.firstName
// delete infoC['lastName']

// console.log(infoC)

// // program 3

// let vehcile = {
//     color:"red",
//     type:"sedane"
// }
// console.log(vehcile.color)
// vehcile.color = "blue"
// vehcile.city = "pune"
// delete vehcile.type


// console.log(vehcile['color'])
// vehcile['color'] = "blue"
// vehcile['city'] = "pune"
// delete vehcile['type']















