const sum = (arr) =>{
    let sum = 0
    for(let i =0; i<arr.length; i++){
        sum =sum+arr[i]
    }
    console.log(`sum of array is ${sum}`)
        
}
let arr =[1,2,3]
sum(arr)