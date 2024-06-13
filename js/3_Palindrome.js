// How to check whether a string is palindrome or not ? 

// const palindrome = (string)=>{
//     // const strpalindrome = string.split('')
//     // const strRev = strpalindrome.reverse()
//     // const strjoin = strRev.join('')

//     // if(strjoin === string){
//     //     return `this is palindrome string`
//     // }
//     // else{
//     //     return `this is not palindrome string`
//     // }

//     //
// }

// const string='madam'
// console.log(palindrome(string))

// 2 way 

const palin= (str)=>{
    let revStr = str.split('').reverse().join('')
    return str === revStr

}
console.log(palin("madam"))