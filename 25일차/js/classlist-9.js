var title = document.querySelector("#title");


title.onclick = () => {
    title.classList.toggle("clicked")
}

const elements = document.getElementsByClassName('user');
const elementsArray = Array.from(elements);

elementsArray.forEach(cb =>{
    cb.onclick = function(){
        this.classList.toggle("blue-italic")
    }
})




// var users = document.querySelectorAll(".user")
// users.forEach(cb =>{
//     cb.onclick = function(){
//         this.classList.toggle("blue-italic")
//     }
// });

