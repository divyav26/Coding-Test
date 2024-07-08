// how to merge two arrays and short them in js

let arr1 = [1,3,4,5,6]
let arr2 = [9,6,7,2]

//using concat
const marge_arr = arr1.concat(arr2)
const res = marge_arr.sort((a,b)=>{
    return a-b
})
console.log(res)

//spread op

const two_arr = [...arr1,...arr2]
const res2 = two_arr.sort((a,b)=>{
    return a-b
})

console.log(two_arr)