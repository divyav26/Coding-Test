function init(){
    let name="divya"
    function displayName(){
        const num = 5
        console.log(name,num)
    }

    function SirName(){
        console.log(name,num)//it showing me error it not defind
    }
    displayName()
    SirName()
}
init() 
console.log(name)