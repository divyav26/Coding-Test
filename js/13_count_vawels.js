//count the number of vowels in string

// const vowels= (str) =>{
//     const Vowels = 'aioueuAIOUE'
//     let count = 0
//     for(let char of str){
//         if(Vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowels('divyaaa'))


const vowels2 = (str)=>{
    const VowlesData = 'aioueAOUEI'
    let count = 0

    for(let char of str){
        if(VowlesData.includes(char)){
            count++
        }
    }
    return count
}
console.log(vowels2("anta"))