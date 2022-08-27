//Array methods
let num = [1,2,3,34,5]
console.log(num)
let b = num.toString()//b is now a string
console.log(b,typeof b)
let c = num.join("_")
console.log(c,typeof c)

let r = num.pop() // pop returns the popped element\
console.log(num,r)
let r = num.push(56) //push returns the new array length
console.log(num,r)

let r = num.shift() //re3moves an element from start of the array
console.log(r,num)

let r =num.unshift(78) //
console.log(r,num)