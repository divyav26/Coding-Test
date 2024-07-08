
const arr  = [10,20,30,40]
const res = arr.map((num)=>num/2).filter((num)=> num >=15)
console.log(res)

let counter =0
for(var i=1; i<=10; i++){
    counter  += i
}
console.log(counter)
console.log(i)

const obj1 ={
    a:10,
    b:20,
    c:function(){
        console.log(this.a + this.b)
    }
}
obj1.c()

setTimeout(()=>{
    console.log(`this is run 3s after`)
},3000)
clearTimeout()
