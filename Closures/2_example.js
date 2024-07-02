// function x(){
//     var a=4
//     function y(){
//         console.log(a)
//     }
//     a=100
//     y()
// }
// x()

function z(){
    var b=20
    function x(){
    var a=4
        function y(){
            console.log(a,b)
        }
        a=100
        y()
}
x()
}
z()