let a = 4
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys())
  let c = arr.slice(1).reduce((a, b) => a * b, 1)
  return c
}

// This code calculates the factorial of a number using an array and the reduce method.


function facFor(number){
  let fac = 1;
  for(let index = 1; index <= number; index++){
    fac = fac * index
  }
  return fac
}
console.log(factorial(a))
console.log(facFor(a))