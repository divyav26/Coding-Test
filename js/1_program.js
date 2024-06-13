
//Write a JavaScript program to find the largest element in a nested array.// X 

 



//Write a JavaScript function to calculate the sum of two numbers.

// function sum (n1,n2){
//     sum = n1+n2
//     console.log(sum)
// }
// sum(2,3)


//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// const even_num = (arr)=>{
//     let newEven = []
//     for(let i=0; i<arr.length; i++){
//         if(i%2==0){
//             newEven.push(arr[i])
//         }
//         return newEven
//     }
// }
// let arr = [1,2,4,6]
// console.log(even_num(arr))

//Write a JavaScript program to calculate the factorial of a given number.

// const fact = (num) =>{
//     if(num <1){
//         console.log("factorial of 1 is 1")
//     }
//     else{
//         let fact =1
//         for(let i=1; i<=num; i++){
//             fact = fact *i
           
//         }
//         return fact
       
//     }
// }
// console.log(fact(5))


// Write a JavaScript function to check if a given number is prime. 

// const prime_num = (num)=>{
//     let isPrime = true
//     if(num <1){
//         console.log("prime number is not negative")
//     }
//     else if(num >1){
//         for(let i=2; i<num; i++){
//             if(num%i==0){
//                 isPrime = false
//                 break;
//             }
//             if(isPrime){
//                 console.log("prime")
//             }
//             else{
//                 console.log("not prime")
//             }
//         }
//     }
// }

// prime_num(7)


// iterating through  the array
const max_num=()=>{
    let arr =[1,2,3,4,10]
    let max=arr[0]
    for(let item of arr){
        if(item >max){
            max = item
        }
    }
    console.log("Maximun number from array is : ",max)
    
}
max_num()





