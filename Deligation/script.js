const container = document.querySelector('.container')
container.addEventListener('click',((e)=>{
//    console.log(e)
if(e.target.tagName === 'SPAN'){
    window.location.href +="/"+e.target.className
}
}))