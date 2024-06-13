//Find the longest Word in a String

const long_word = (sentance)=>{
    let words = sentance.split(' ')
    let longWord =''
    for(let word of words){
        if(word.length >longWord.length){
            longWord = word
        }
    }
    return longWord
}
let sentance = "I Am coming soon...."
console.log(long_word(sentance))