
// print addition of a given array by filtering out positive value

// let sum = [11,34,56,90]

// let gem = []

// let c1=sum.map(function(el,index,arr){

//   return el + 1
  
// })

// console.log(c1)


// give a new array

// let bie = [45,67,90,34,89,55,39]

// let kie = []

// for(let i=0; i<bie.length; i++){

//    if(bie[i]<50){
//        kie.push(bie[i])

//    }

// }
// console.log(kie)
// //   let [45,34,39]

// let c1=kie.reduce(function(el,acc){

// return el + acc

// },0)

// console.log(c1)

// find marks greater than 60


// let marks = [66,23,45,90,72,47,88,12,39]

// let avg60 = []  // [66,90,72,88]

// for(let i =0; i<marks.length; i++){

//     if(marks[i]>60){

//       avg60.push(marks[i])
//     }

// }
// console.log(avg60)


// object print from a given details

// let info = {

//  firstName : "Tom",
//  LastName  : "Banton",
//  BirthPlace : "London",
//  Profession :  "Cricketer",
//  Jersey     :   "Blue",

// }
// retrieve
// console.log(info.Jersey)
// console.log(info['BirthPlace'])

// update method
// info.firstName = "kirl"
// info.LastName = "chole"
// console.log(info)

// add extra fields 
// info.year = 1996
// console.log(info)


// slice method does not print end index, only prints start to upto before end index
// to remove element in the middle

//                   0            1             2             3         4     5
//let industries = ["Cooking","Manufacturing","fabricating","marketing","IT","Medical"]
    //                  -6           -5              -4          -3      -2      -1
// slice method (startindex,endposition(not inclusive))

//console.log(industries.slice(0,5))

// console.log(industries.slice(1,5))




// splice  ---   (start index,noof elemenstobe deleted)
//give range
//                     0          1              2            3         4       5
// let industries = ["Cooking","Manufacturing","fabricating","marketing","IT","Medical"]
// //                 -6           -5              -4          -3      -2       -1
// // console.log(industries.splice(1,3))
// industries.splice(0,4,"d","e","j","o")
// console.log(industries)

//            0  1  2  3  4  5  6
// let marks = [96,95,94,93,92,91,90]
// //marks.fill("whattofill","startIndex","endIndex(not niclusive)")
// let q7 = marks.fill("1",3,5)
// console.log(q7)
//             0  1  2  3  4  5
// let rupees = [23,45,78,90,34,67]

// rupees.fill("$",2,4)
// console.log(rupees)

// I want to do addition of a particular


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// // [2,4,6,8,10,12,14,16,18,20]

// let q3 = numbers.map(function(el){
//     return el * 2
// })
// console.log(q3)


// let firstrN = "Murphy"

// let lastN = "ciliian"


// console.log(`My fist name is ${firstrN} and my second name is ${lastN}`)

// let a  = 10 
// let b = 5
// let c = "hello"

// console.log(a+b+c)



// let arron = [23,45,67,89,88,56]

// let dam = 0

// let t1=arron.map(function(el,index,arr){

//   return 10 - el
  
// })

// console.log(t1)

// startswith() ---- boolean value return
// let time = " median "

// let r=time.startsWith("M")
// console.log(r)

// first take posive value and than do addition

// let sum = [12,34,-80,-45,-66,-22,43,90]

// let t3=sum.filter(function(el,index,arr){

//     return el>0

// })

// console.log(t3)

// let t4=t3.reduce(function(acc,el){

// return acc + el

// })
// console.log(t4)


// while loop

// let t=0

// while(t<6){


//      if(t==4){
//         break
        
//      }
     
//      console.log(t)
//      t++
//     }


let statement1 = " Mr. Napolean"
let statement2 = "boss"

console.log(`Today, we are announcing ${statement1} is our ${statement2}`)







