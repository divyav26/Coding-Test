
const arrNum = [1,10,3,6,7,9]

const missNum = []

const MissingValue = (arr)=>{
    const minvalue = Math.min(...arr)
    console.log(minvalue)
    const maxvalue = Math.max(...arr)
    console.log(maxvalue)

    // Check if the current number i is not in the array

    for (let i=minvalue; i<maxvalue; i++){
        
        // If i is not in the array, add it to the missNum array

        if(arr.indexOf(i) <0)
    {missNum.push(i)}
    }
    return (missNum)
    
}
console.log(MissingValue(arrNum))