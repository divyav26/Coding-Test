// 1. Write a JavaScript program to find the maximum number in an array. 

const max_num = (arr) =>{
    let max= arr[0]
    for(let i=0;i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

let arr =[2,3,4,10]
console.log(max_num(arr))