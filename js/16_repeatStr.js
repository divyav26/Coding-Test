//Repeat a string a given number

const RepeatStr = (str, num)=>{
    if(num <0){
        return ''
    }
    return str.repeat(num)
}
console.log(RepeatStr("divya",2))