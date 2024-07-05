// what is difference between Filter and Find method

const filterMthod = (arr)=>{
    let even = arr.filter((ele =>ele%2==0))
    return even
    

}

let arr =[3,5,9]
console.log(filterMthod(arr))

const findMthod = (arr2)=>{
    let even = arr.find((ele =>ele%2==0))
    return even
    

}

let arr2 =[2,4,6,8,9]
console.log(findMthod(arr2))