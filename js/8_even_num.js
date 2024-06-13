// // Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// const even_arr = (arr)=>{
//     let evennum = []
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             evennum.push(arr[i])
//         }
       
//     }
//     return evennum;
// }

// let arr =[2,3,4,6,8]
// console.log(even_arr(arr))

// using filter 

const even_arr = (arr)=>{
      return arr.filter(num => num%2==0)


}
let arr =[2,3,4,6,8]
console.log(even_arr(arr))
