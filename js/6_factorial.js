// Find the factorial of given number ?

const fact = (num)=>{
    if(num <0){
        return `no factorial of negative number`
    }
    else if(num === 0 || num ===1){
        return `factorial of 0 and 1 is 1`
    }
    else{
        let fact = 1
        for(let i=1; i<=num; i++){
            fact =fact * i
        }
        return fact
    }

}
const num = 5
console.log(fact(5))