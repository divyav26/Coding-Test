 'use strict'
 
 const user ={
    usernam:"divya",
    price: 99,

    welcomeMessage:function(){
        //we can not access username like this
        // you can access using this keyword
        // console.log(`${username}, welcome to my website`)

        console.log(`${this.username}, welcome to my website`)
    }


 }




//  const user1 = function(){
//     //this will not work as function 
//     let firstName ="anita"
//     console.log(this.firstName)
//  }
//  user1()

 const user2 = ()=>{
    //undefine 
    let username="mishra"
    console.log(this.username)
 }
user2()

console.log(this) // 

//in regular fun

function sum(){
    let a=10
    let b=20
    sum = a+b
    console.log(`sum of a and b is ${sum}`)
    console.log(this) // it is retrun global object (window)

}

sum()

const Info = {
    name:"divya",
    qualif: "Bsc.IT",
    sum:function(){
        let a=10
        let b=20
        sum = a+b
        console.log(`sum of a and b is ${sum}`)
        console.log(this) // it is retrun global object (window)
    
    }


}

Info.sum()


