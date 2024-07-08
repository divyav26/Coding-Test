

const palindrome =(str)=>{
    let strSplice = str.split('')
    let strRev = strSplice.reverse()
    let strJoin =strRev.join('')
    
    if(str === strJoin){
        return `palindrome str`
    }
    else{
        return 'not palindrome str'
    }

}
console.log(palindrome('divya'))