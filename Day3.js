
//print a varible with arithmetic operations

let t=6
    y=3

console.log(t-y)     //  11
console.log(t+y)     //   123
console.log(t*y)     //    3752
console.log(t/y)     //   1.196
console.log(t%y)     // 37.56

//program with operations by passing multiple parameters

function operations(w,z){

  console.log(w+z)
  console.log(w-z)
  console.log(w*z)
  console.log(w/z)

}
operations(5,6)
// operations(2,2)

//function without parameter and without return type

  function repeat(){
    console.log(3+4)
    console.log(3-4)
  }

repeat()
repeat()
repeat()

//function with parameter and without return type
function sat(x,y){
    console.log(x+y)
}
sat(2,2)
sat(4,4)
sat(5,5)


// function without parameter and without return type
function kat(){
    console.log(4+4)
}
kat()
kat()
kat()

//function with parameter and with return type


function sum(x,y){
    return(x+y)
}
let q1=sum(3,3)
console.log(q1)
console.log(q1+q1)
console.log(q1-0.5)
console.log(q1/2)



















