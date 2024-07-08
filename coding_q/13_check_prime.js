//check number is prime or not

const prime_num = (num)=>{
    for(let i=2; i<num/2; i++){
        if(num%i===0){
            return `${num} is not prime`
        }

        return `${num} is prime num`
    }
}

console.log(prime_num(4))