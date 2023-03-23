// for(var i = 0; i < user.length; i++){
    //     document.write(user[i] + "<br>");
    //     document.write(user[i].innerHTML + "<br>");
    // }
    

//     왜 안됌??
//     var user = document.getElementsByClassName("user");
//     user.forEach(cb => {
//     cb.addEventListener("click", function(){
//         this.classList.toggle("blue-italic")
//     })
// })

var user = document.getElementsByClassName("user");
for(var i = 0; i < user.length; i++){
    user[i].addEventListener("click",function(){
        this.classList.toggle("blue-italic")
    })
}



// var users = document.querySelectorAll(".user");
// users.forEach(cb => {
//     cb.addEventListener("click", function(){
//         this.classList.toggle("blue-italic")
//     })
// })


