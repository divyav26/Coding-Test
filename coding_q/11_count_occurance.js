const count_occ = (str)=>{
    let count = 0
    let letter ='a'
    for(let i=0; i<str.length; i++){
        if(str[i] === letter){
            count ++
        }
    }
    return count

}

console.log(count_occ('divyaaa'))