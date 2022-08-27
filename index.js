 // let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.length)
// delete num[0] //Deleting item from does not reduce size of array
// console.log(num)
// console.log(num.length)

//  let num_more = [11,12,13,14,15,16,17,18,19]
// let newArray1 = [11,12,13,14,15,16,17,18,19]
// let newArray = num.concat(num_more)
// console.log(newArray)

//Sort method

let compare = (a,b)=>{
  return b-a
}
let num = [551,666,872,700]
//Sort the array
num.sort(compare)
console.log(num)

//Reverse the array
num.reverse()
console.log(num)


//Splice and Slice
