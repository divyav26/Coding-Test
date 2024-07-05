//How To find second Largest value in array|Javascript Coding Interview Question 


// const largestValue = (arr)=>{
//     const firstValue = Math.max(...arr)
//     console.log(firstValue)//first largest value

//     index = arr.indexOf(firstValue)
//     // console.log(index) //it give me index number of 3 number

//     arr.splice(index,1)

//     const secondLargestValue = Math.max(...arr)
//     return secondLargestValue

// }
// const arr=[2,4,6,8]
// console.log(largestValue(arr))

const Number = (arr)=>{
    let firstValue = Math.max(...arr)
    index = arr.indexOf(firstValue)

    arr.splice(index,1)
    let secondValue = Math.max(...arr)
    return secondValue

}

const arr=[2,3,4,6,7]
console.log(Number(arr))