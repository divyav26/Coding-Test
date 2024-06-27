const x=()=>{
    var i=1
    setTimeout(()=>{
        console.log(i)
    },3000)
    console.log("example")
}

x()

//print 1 to 10 every 2 s how to solve it
// if we use var then it reslt is 66666 because its laxical env.
//var create i reference that why
 
// const numberPrint = ()=>{
//     for(let i=1; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// numberPrint()

//if interviwers say use var than we can use like this

const numberPrint = ()=>{
    for(let i=1; i<=5; i++){
    const close =(i)=>{
       
            setTimeout(()=>{
                console.log(i)
            },i*1000)
        }
    
    close(i)// here it create we reference 
    }
}
numberPrint()