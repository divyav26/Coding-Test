//Find the missing umber from sorted array 

const missingNum = (arrNum)=>{
    let maxValue = Math.max(...arrNum)
    let minValue = Math.min(...arrNum)

    for(let i=minValue; i<maxValue; i++){
        if(arrNum.indexOf(i) < 0){
            misNum.push(i)
        }
    }
    return misNum
}
let misNum =[]
const arrNum = [11,12,14,15]
console.log(missingNum(arrNum))