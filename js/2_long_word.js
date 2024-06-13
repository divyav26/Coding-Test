// Program to find longest word in a given sentence  

const long_word = (sentence)=>{
    const words = sentence.split(' ')
    let longword =''

    for(const word of words){
        if(word.length > longword.length){
            longword = word
        }
    }
    return longword
}
let sentence ="thank you for comming.."
console.log(long_word(sentence))