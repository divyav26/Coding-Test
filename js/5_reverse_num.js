// Program to find Reverse of a string without using built-in method ? 


const rev_str =(string) =>{
    let revStr =''
    for(let i=string.length-1; i>=0; i--){
        revStr += string[i]
    }
    return revStr
}
let string = "divya"
console.log(rev_str(string))

// using built in 

const String2 =(s)=>{
    return s.split('').reverse().join('')
}
let s = "hello"
console.log(String2(s))