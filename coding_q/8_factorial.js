const factorial = (num)=>{
    if(num==0){
        return 1
    }
    else{
        fact =1
        for(let i=1; i<=num; i++){
            fact = fact*i
        }
        return fact
    }
}

console.log(factorial(5))