// Write a program to remove duplicates from an array ? 

const duplicate_arr =(arr)=>{
    let uniarr = arr.filter((item, index) => arr.indexOf(item) === index);
    
    return uniarr
}

const arr =[1,2,3,4,5,2,3,4]
console.log(duplicate_arr(arr))

const arr_duplicate = (arr1)=>{
    let arruni2 = arr1.filter((item,index)=>arr1.indexOf(item) === index)
    return arruni2
}
const arr1 = [0,5,1,1,1,1]
console.log(arr_duplicate(arr1))

const arr_dup3 = (arr3) =>{
    // Convert array to a Set to remove duplicates, then convert back to an array
    let newArr = [...new Set(arr3)]
    return newArr
}
const arr3 = [33,33,44,55]
console.log(arr_dup3(arr3))