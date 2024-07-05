

//create object 
//  here we have 2 objetcs 
// const userDetail = {
//     name:"divya",
//     Age:23,
//     Degination:"bscit",
//     printData : function(){
//         console.log(this.Age)
//         console.log(this.name)
//     }
// }

// userDetail.printData() //now we can call details2 data using one 
// const userDetail2 = {
//     name:"anita ",
//     Age:24,
   
// }

// userDetail.printData.call(userDetail2)
//ak objetc ke data ko dusre object me call krna h to call method use karege




const userDetail = {
    name:"divya",
    Age:23,
    Degination:"bscit",
}

//we can create a function and reuse many function
function data(state,country){
    console.log(this.Age)
    console.log(this.name)
    console.log(`my name is ${this.name} i am from ${state} ${country}`)
}

const userDetail2 = {
    name:"anita ",
    Age:24,
   
}

data.call(userDetail2,"Delhi","India")

// here diff is that apply use array like ['delhi, india]

data.apply(userDetail,["Mumbai","India"])


// bind =>mean its bind something 

//it copy our data and then call fun

let newbind = data.bind(userDetail2,"Delhi","India")
newbind()