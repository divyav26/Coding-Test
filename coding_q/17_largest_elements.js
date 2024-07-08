//Find the mth largest element in a sorted array

num =3

let arr =[12,34,21,14,67,35,64,25]

arr.sort((a,b)=>{return a-b})

const nth = arr[arr.length - num]
console.log(nth)
