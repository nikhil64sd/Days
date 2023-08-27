


// program 1
let  firstName = "chinmay"
console.log(firstName)

let lastName = 'deshpande'
console.log(lastName)

let middleName = 'shirish'
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)


// program 2

let firstN = "chinmay"
let lastN = "deshpande"

// "My firstName is chinmay and lastName is Deshpande"
// string concat
console.log("My firstName is "+firstN+ " and lastName is "+lastN)
// string interpolation
console.log(`My firstName is ${firstN} and lastName is ${lastN}`)


// program 3
// string + string  -----> string 
// number + string  ------> string 
// string + number  ------> string 
// number + number  ------> number

// program 3
let a  = 10 
let b = 5
let c = "hello"

console.log(a+b+c)
// number + number + string 
        //number + string 
            // string  // 15Hello

//program 4
console.log(c+a+b)
// string + number + number 
//       string   + number   // "hello10" + 5 
//            string         // "hello105"


console.log(b+c+a)

// loop over string 

let city = "pune"
//  0   1   2  3
//  p   u   n  e
console.log(city[0])
console.log(city[2])
// string stores the value by index

for(let i = 0 ; i < 4 ; i++){  // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(city[i])
}


for(let i = city.length-1 ; i >= 0 ; i--){
     //console.log(i)
     console.log(city[i])
}

// program 6
// string -- object ---- properties and method 
let city2 = "nagpur"
console.log(city2.length)

let q1 = city2.toUpperCase()
console.log(q1)

let q2 = q1.toLowerCase()
console.log(q2)

















