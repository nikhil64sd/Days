// use of concat(),slice(),join(),at()

// concat()

let cities = ['Maharashtra','karnataka','tamilnadu','Gujrat']

let capitals = ['pune','banglore','chennai','surat']

let c3=cities.concat(capitals)

console.log(c3)


// join()

let capitals1 = ['pune','banglore','chennai','surat']

let c2=capitals1.join(':')

console.log(c2)

// slice()

//                 0           1            2           3      4    5     6
// let cities = ['Maharashtra','karnataka','tamilnadu','Gujrat','Mp','Ap','Punjab']
// // //                  -6         -5         -4         -3   -2    -1      0


 let c1=cities.slice(2,-1)
// let c2=cities.slice(1,-3)

 console.log(c1)


// at()---- gives index value of that array element

let coast = ['Africa', 'Port of Spain','finland']

let c4=coast.at(1)

console.log(c4)


// splice()
//                0           1        2      3    
let fruitss = ["apple","mango","grapes","chikoo"]
fruitss.pop()
fruitss.shift()
fruitss.splice(startIndex, numberOfElementTobeDeleted)

fruitss.splice(0,3)
fruitss.splice(0,3,"cheery","jackfruit","tomato")
console.log(fruitss)
                //    0           1         2      3       4
 let vegetables = ['Cucumber','carrot','flower','palak','coriander']

 vegetables.splice(0,4,"Loki",'cobi','green peace',"yu")

 console.log(vegetables)


// flat()  --- to print the all array in one time
            //     0        1            2           
            // 0  1  2    0  1  2    0  1  2
 let deal = [[22,44,33],[55,67,45],[90,56,45]]

 console.log(deal[2][2])

 let q1=deal.flat()

 console.log(q1)


