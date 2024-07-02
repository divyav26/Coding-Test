function clickHandle(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }

}

document.querySelector(".green").onclick = clickHandle('green')

