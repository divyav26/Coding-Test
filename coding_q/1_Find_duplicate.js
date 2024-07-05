//how to find duplicate element in array

let arrNum = [1,2,3,4,5,6,7,3]
let duplicateNum = arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicateNum)