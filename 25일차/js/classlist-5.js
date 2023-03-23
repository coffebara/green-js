var title = document.querySelector("#title");


title.onclick = () => {
    title.classList.toggle("clicked")
}

var users = document.querySelectorAll(".user")
users.forEach(cb =>{
    cb.onclick = function(){
        this.classList.toggle("blue-italic")
    }
});

