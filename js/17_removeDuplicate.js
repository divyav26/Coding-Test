//Remove Duplicate Char from a string

const Remove =(str) =>{
    return [...new Set(str)].join('')
}
console.log(Remove("divyaaaa"))