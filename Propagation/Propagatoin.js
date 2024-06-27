//event propagation
// => if we click button it call all three one by one
const div = document.querySelector('div')
const form = document.querySelector('form')
const button = document.querySelector('button')


//event bubbling =>it is by default =>
    // it work bottom to top

//event capturing =>it work top-to-bottom
// {
    // capture:true => it work as capturing 
// }

div.addEventListener("click",(()=>{
    alert("div")
}))

button.addEventListener("click",(()=>{
    alert("button")
}
),
// {
//     capture:true //it call first div ->form 
// }
)

form.addEventListener("click",((e)=>{
    e.stopPropagation()
    alert("form")
})) //it not call div box because we stop to form 