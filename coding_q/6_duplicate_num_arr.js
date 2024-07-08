//how to remove duplicate value from an array

const duplicate_num = (arr)=>{
    const duplicate = arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
    return duplicate
}

const arr =[1,2,3,4,5,4]
console.log(duplicate_num(arr))