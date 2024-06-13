//Capitalize the first letter of each word

const Capital_First = (str)=>{
   return str.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(Capital_First("welcome to home"))