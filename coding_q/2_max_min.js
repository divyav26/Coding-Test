//How To find max/min in a given array in javascript| Coding Interview Questions - #2 |

const min_max = (arr)=>{
    let max=arr[0]
    let min =arr[0]

   for(let i=1; i<arr.length; i++){
    if(arr[i] >max){
        max = arr[i]
    }

    if((arr[i] <min)){
        min = arr[i]
    }
   }
   return [max,min]

}

let arr =[1,2,3,5,6]
console.log(min_max(arr))