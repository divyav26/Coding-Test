

const vowels=(str)=>{
    let vowelsData =['a','i','o','u']
    let count = 0
    for(let char of str){
        if(vowelsData.includes(char)){
            count ++
        }
    }
    return count

}
console.log(vowels("diiivya"))
