

const reverse_str =(str)=>{
    let strSplice = str.split('')
    let strRev = strSplice.reverse()
    let strJoin =strRev.join('')
    return strJoin

}
console.log(reverse_str('divya'))